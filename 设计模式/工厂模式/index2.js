// 抽象工厂
// function Factory(name, age, career) {
//     let work
//     switch(career) {
//         case 'coder':
//             work = work = ['写代码', '写系统', '改bug']
//             break
//         case 'productManager' :
//            work = ['定会议室', '写PPT', '催更']
//             break
//         case 'boss':
//             work = ['喝茶', '看报', '见客户']
//             break
//     }
//     return new User(name, age, career, work)
// }


class FakeStar extends MobilePhoneFactory {
    // 提供操作系统的接口
    createOS() {
        return new AndroidOS()
    }
    // 提供硬件的接口
    createHardWare() {
        return new QualcommHardWare()
    }
}


class OS {
    controlHardWare() {
        throw new Error('你需要将我重写')
    }
}

class AndroidOS {
    controlHardWare() {
        console.log('我会用安卓的方式取操作系统')
    }
}

class AppleOS extends OS {
    controlHardWare() {
        console.log('我会用苹果的方式取操作系统')
    }
}

class HardWare {
    operateByOrder() {
        throw new Error('你需要将我重写')
    }
}

class QualcommHardWare extends HardWare{
    operateByOrder() {
        console.log('我会用高通的方式去运转')
    }
}

class MiWare extends HardWare {

}

class newStarFactory extends MobilePhoneFactory {
    createOS() {

    }
    createHardWare() {

    }
}

// 这是我的手机
const myPhone = new FakeStar()
// 让他具备操作系统
const myOS = myPhone.createO()
// 让他具备硬件
const myHardWare = myPhone.createHardWare
// 启动操作系统
myOS.controlHardWare()
// 唤醒操作系统
myHardWare.operateByOrder()