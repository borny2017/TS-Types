class User {
    readonly username = 'TestUsername';
    readonly password = 'TestPassword';
}

let user2 = new User();

class CTest {
    readonly user = new User();
}

let ctest2 = new CTest();
ctest2.user = user2;
