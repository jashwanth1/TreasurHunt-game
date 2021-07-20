class Security {

    constructor(){

        // Add code to create the input and button elements
        this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style('background', 'white');
        this.access2 = createInput("Code2")
        this.access2.position(700,180);
        this.access2.style('background', 'white');
        this.access3 = createInput("Code3")
        this.access3.position(100,300);
        this.access3.style('background', 'white');


        this.button1 = createButton('Check');
        this.button2 = createButton('Check');
        this.button3 = createButton('Check');
        this.button1.position(100,120);
        this.button2.position(700,210);
        this.button3.position(100,330);
        this.button1.style('background','lightgrey')
        this.button2.style('background','lightgrey')
        this.button3.style('background','lightgrey')
        this.buttons = this.button1,this.button2,this.button3;
    }

    display(){

        // Add code to make the buttons function as expected
        this.buttons.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.buttons.hide();
                this.accesss1.hide();
                score++;
            }
        })

    }
}