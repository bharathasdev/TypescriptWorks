
import Graphics from "./graphics/graphics";
class Greeter{
    public greeting:string;
    public graphicObj:any;
    constructor(message:string)
    {
        this.greeting = message;
    }

    public greet(){
        this.graphicObj = new Graphics();
        return "Hello123, "+ this.greeting;//+ this.graphicObj.getMyName();
    }

}
let greeter = new Greeter("Good Morning !");
document.body.innerHTML = greeter.greet();
