const cookieName = 'GWM';
const notifyName = 'GWM Token🍪'
const body = $request.body;

if (body) {
    console.log(`${notifyName}: ${body}`);
    $notify(`🎉${cookieName} 获取成功！`, '', `${notifyName}=${body}`);
}

setTimeout($done, 100000)
$done({})
