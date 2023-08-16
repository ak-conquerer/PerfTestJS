const URL = 'https://fakerestapi.azurewebsites.net';
const VuTime = 
[ 
{ duration: '1s', target: 1 }, 
{ duration: '2s', target: 10 }, 
{ duration: '5s', target: 25 }, 
{ duration: '10s', target: 50 }, 
{ duration: '20s', target: 100}, 
]

const vus = 10;
const duration = '20s';

export function mainURL() {
    return URL;
};

export function RunOptionsUsers()
{
    return vus;
}

export function RunOptionsDuration()
{
    return duration;
}

export function runOptions()
{
    return VuTime;
}