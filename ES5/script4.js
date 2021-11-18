class Person{
    constructor(name){
        this.name = name;
    }
    hello(){
        return 'Hello, I am ' + this.name + '.';
    }
    set name(value){
        this._name = value;
    }
    get name(){
        return this._name;
    }

}

//const todd = new Person('Todd Pham');
//console.log(todd.hello());

class Programmer extends Person{
    hello(){
        return super.hello() + ' I am a programmer. ';
    }
}
const toddP = new Programmer('Todd Pham');
console.log(toddP.hello());

for(const v of ['a', 'b', 'c']){
    console.log(v);
}

for(const [i,v] of ['a', 'b', 'c'].entries()){
    console.log(i);
    console.log(v);
}

//Promise
let done = false;

const isItDoneYet = new Promise((resolve, reject) => {
    if(done){
        const workDone = {name: 'Todd Pham',
        age: 20
    };
        resolve(workDone);
    }
    else{
        const why = 'Still working on something else';
        reject(why);
    }
});

const checkIfItsDone = () => {
    isItDoneYet
        .then(ok =>{
            console.log(ok);
        })
        .catch(err =>{
            console.error(err);
        })
}
checkIfItsDone();


const status = response => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
  }
  
    const wisePerson = {
        isWise: true
      }
      const foolishPerson = {
        isFoolish: true
      }
      const wiseAndFoolishPerson = Object.assign({}, wisePerson, foolishPerson)

      console.log(wiseAndFoolishPerson) //{ isWise: true, isFoolish: true }

      const a = [1, 2, 3];
      const b = [...a, 4, 5, 6];
      console.log(b);


     let browserType = 'Mozilla';
     console.log(browserType.indexOf('zilla'));
     console.log(browserType.indexOf('vanilla'));
     console.log(browserType.slice(0,3));


    let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
    let myArray = myData.split(',');
    console.log(myArray);   
    myArray.length;
    myArray[0]; // the first item in the array
    myArray[1]; // the second item in the array
    myArray[myArray.length-1]; // the last item in the array
    let myNewString = myArray.join(',');
    console.log(myNewString);
    let dogNames = ['Rocket','Flash','Bella','Slugger'];
    console.log(dogNames.toString()); // Rocket,Flash,Bella,Slugger

    let myArray2 = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
    myArray2.push('Cardiff');
    console.log(myArray2);

    myArray2.push('Bradford', 'Brighton');
    console.log(myArray2);

    let newLength = myArray2.push('Todd');
    console.log(newLength);

    myArray2.pop();
    console.log(myArray2);

    let removedItem = myArray2.pop();
    console.log(removedItem);

    myArray2.unshift('Todd Pham');
    console.log(myArray2);

    let removedItem2 = myArray2.shift();
    console.log(myArray2);

    