//Problem: 2
// function isJavaScriptFile(String) {
//     if (String.endsWith('js')) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
//     return typeof (String) === 'string';
// }
// isJavaScriptFile('flower.png');



//Problem: 5
function isBestFriend(object1, object2) {

    if ((object1.name == object2.friend) && (object1.friend == object2.name)) {
        console.log(true);
    }
    else {
        console.log(false);
    }
    return true;
}

// let object1 = { name: 'abul', friend: 'babul' };
// let object2 = ['abul', 'babul'];

// let object1 = { name: 'abul', friend: 'babul' };
// let object2 = { name: 'babul', friend: 'abul' };

isBestFriend({ name: 'abul', friend: 'kabul' }, { name: 'kabul', friend: 'sabul' });



