// array in local storage for registered users


let users = JSON.parse(localStorage.getItem('users')) || [];
import saveAs from 'file-saver';
export function loadEnv() {
    var loadEnv = sessionStorage.getItem('loadEnv');

    if (loadEnv !=='undefined' && loadEnv ==='true')
        return;

    localStorage.setItem('loadEnv', 'true');
    var infoData = require('../../data/info.json');
    var txtResult = JSON.stringify(infoData);
    localStorage.clear();
    localStorage.setItem('users', JSON.stringify(infoData));
}

export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // authenticate
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);

                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        return user.username === params.username && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        // if login details are valid return user details and fake jwt token
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            token: 'fake-jwt-token'
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        // else return error
                        reject('Username or password is incorrect');
                    }

                    return;
                }

                // get users
                if (url.endsWith('/users') && opts.method === 'GET') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users))});
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // get user by id
                if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        let matchedUsers = users.filter(user => { return user.id === id; });
                        let user = matchedUsers.length ? matchedUsers[0] : null;

                        // respond 200 OK with user
                        resolve({ ok: true, text: () => JSON.stringify(user)});
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // register user
                if (url.endsWith('/users/register') && opts.method === 'POST') {
                    // get new user object from post body
                    let newUser = JSON.parse(opts.body);

                    // validation
                    let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
                    if (duplicateUser) {
                        reject('Username "' + newUser.username + '" is already taken');
                        return;
                    }

                    // save new user
                    newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));


                    var txtResult = JSON.stringify(users);
                    /* download in ie/chrom but not working in firefox
                    var filename = 'C:\\Users\\weiqian.sang\\react\\reactui\\data\\info2.json';
                    var a = document.createElement('a');
                    a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(txt));
                    a.setAttribute('download', "C:\Users\weiqian.sang\react\reactui\data\info2.json");
                    a.appendChild(hiddenField);
                    document.body.appendChild(a);
                    a.click()
                    document.body.appendChild(a);
        */
/*
                  var FileSaver = require('file-saver');
                    var blob = new Blob([txt], {type: "text/plain;charset=utf-8"});
                    FileSaver.saveAs(blob, "hello.txt");
*/
                    var FileSaver = require('file-saver');
//                    var resultTxt = JSON.stringify(parsedtxt);
//                    const dateTime = Date.now();
//                    console.info(dateTime);
//                    const timestamp = Math.floor(dateTime / 1000);
//                    const timestamp = new Date(); // This would be the timestamp you want to format
                    const timestamp = Date.now(); // This would be the timestamp you want to format
//                    console.log(timestamp);
//                    var timeNumber=timestamp.getUTCFullYear()+timestamp.getUTCMonth()+timestamp.getUTCDay()+timestamp.getUTCHours()+timestamp.getUTCMinutes()+timestamp.getUTCSeconds()+timestamp.getUTCMilliseconds();
//                    var timeNumber=timestamp.getFullYear()+timestamp.getMonth()+timestamp.getDay()+timestamp.getHours()+timestamp.getMinutes()+timestamp.getSeconds()+timestamp.getMilliseconds();
//                    var timeNumber=timestamp.getUTCDate()+timestamp.getUTCMonth()+timestamp.getUTCDay()+timestamp.getUTCHours()+timestamp.getUTCMinutes()+timestamp.getUTCSeconds()+timestamp.getUTCMilliseconds();
                    var timeStampCur =(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false}).format(timestamp));
//                    var fileNameCur="info." + timeNumber + ".json";
                    var fileNameCur="info_" + timeStampCur + ".json";
                    var fileCur = new File([txtResult], fileNameCur, {type: "text/plain;charset=utf-8"});
//                    var fileNew = new File([txtResult],"info.json", {type: "text/plain;charset=utf-8"});
//                    var fileNew = new File([txtResult],"info.json", {type: "text/plain;charset=utf-8"});
                    FileSaver.saveAs(fileCur);
//                    FileSaver.saveAs(fileNew);
/*
                    const fs = require('fs')

                    const folderName = 'c:\\temp';
//                    fs.mkdirSync(folderName);
                    fs.rename("info.json", "info111.json", function(err) {
                        if (!err) {
                            console.log("change name" + 'succeed!')}});
*/

                    // respond 200 OK
                    resolve({ ok: true, text: () => Promise.resolve() });

                    return;
                }

                // delete user
                if (url.match(/\/users\/\d+$/) && opts.method === 'DELETE') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        for (let i = 0; i < users.length; i++) {
                            let user = users[i];
                            if (user.id === id) {
                                // delete user
                                users.splice(i, 1);
                                localStorage.setItem('users', JSON.stringify(users));
                                break;
                            }
                        }

                        // respond 200 OK
                        resolve({ ok: true, text: () => Promise.resolve() });
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}
