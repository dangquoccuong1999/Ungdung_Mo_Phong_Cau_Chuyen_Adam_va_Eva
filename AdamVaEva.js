let Apple = function () {
    this.weight = 10;
    this.status = true;

    this.getWeight = function () {
        return this.weight;
    }
    this.decrease = function () {
        if (this.weight > 0) {
            this.weight--;
        }
    }
    this.isEmpty = function () {
        if (this.getWeight() == 0) {
            this.status = false;
        } else if (this.getWeight() > 0) {
            this.status = true;
        }
        return this.status;
    }
}

let Human = function (name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.getName = function () {
        return this.name;
    };
    this.setName = function (name) {
        this.name = name;
    };
    this.getGender = function () {
        return this.gender;
    };
    this.setGender = function (gender) {
        this.gender = gender;
    };
    this.getWeight = function () {
        alert('Cân nặng của '+ this.name + ' là: '+ this.weight);
        return this.weight;
    };
    this.setWeight = function (weight) {
        this.weight = weight
    };

    this.checkApple = function () {
        if (this.isEmpty() == false) {
            alert('Đã ăn hết táo rồi bạn iu ơi !!!');
        }
    };
    this.eat = function (apple) {
        apple.decrease();
        this.weight++;
        alert('Vừa ăn 1 miếng ngon quá b ơi');

        console.log(apple.weight);
    }
    this.say = function () {
        alert(this.name + ' talk : Hello người anh em thiện lành ^^');
    }

}

let adam = new Human("Adam", 'male', 50);
let eva = new Human("Eva", 'male', 50);
let apple = new Apple()


