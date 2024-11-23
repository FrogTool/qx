const cookieName = 'GWM';
const notifyName = 'GWM Token🍪'
const body = $request.body;

if (body) {
    console.log(`${notifyName}: ${body}`);
    $notify(`🎉${cookieName} 获取成功！`, '', `${notifyName}=${body}`);
}

$notify(`${cookieName}获取成功！`, '', `${cookieName}获取成功！请查看弹窗匹配值或日志查看完整值。`);
console.log(`${cookieName}获取成功！`);
console.log(`🔔输出完整请求值：\n${body}\n`);

setTimeout($done, 1000)
$done({})
