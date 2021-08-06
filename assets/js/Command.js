var state = 0;
var text;
        
class Command extends Phaser.GameObjects.Image {
    constructor(scene, map) {
        super(scene, map);
        // ...
        scene.add.existing(this);

        /*** 카메라가 비추는 화면 변수 선언 ***/
        this.worldView = scene.cameras.main.worldView;

        /*** 전체 코드에 걍 예시로 넣은 문장 ***/
        this.contenttext = 
            "#include <stdio.h> \n int main(){ \n " +  scene.code_zone_1 +  "(\"HI\"); \n }" 
            + "2번째 코드 : " +  scene.code_zone_2 + "\n3번째 코드 : " + scene.code_zone_3 ;

        /*** 명령창버튼 활성화 ***/
        this.entire_code_button = scene.add.image(20,10,'entire_code_button').setOrigin(0,0);
        this.entire_code_button.setInteractive();

        /*** 컴파일버튼 활성화 ***/ //@@@@@@@@@@@
        this.compile_button = scene.add.image(20,170,'compile_button').setOrigin(0,0);
        this.compile_button.setInteractive();
    
        /*** 명령창, 명령창 내용 zone 미리 add해주기 ***/
        this.commandbox = scene.add.image(map.widthInPixels, 5,'commandbox').setOrigin(0,0);
        this.zone = scene.add.zone(map.widthInPixels, 100,  360, 550).setOrigin(0).setInteractive();
        text = scene.add.text(map.widthInPixels, 100, this.contenttext, { fontFamily: 'Arial', color: '#ffffff', wordWrap: { width: 350 } }).setOrigin(0,0);

        /*** 명령창에 전체코드 띄우고 드래그 할 수 있기위한 설정 ***/
        this.graphics = scene.make.graphics(); 
        var mask = new Phaser.Display.Masks.GeometryMask(this, this.graphics);
        text.setMask(mask);


        /*** 컴파일 버튼 누를시 컴파일러 동작. ***/ //@@@@@@@@@@@
        this.compile_button.on('pointerdown', () => {
           
            if (this.contenttext !== '')
                {
                    var data = {

                        'code': this.contenttext
    
                    };
                    data = JSON.stringify(data);

                    var xhr = new XMLHttpRequest();

                    xhr.open('POST', '/form_test', true);                
                    
                    xhr.setRequestHeader('Content-type', 'application/json');
                    xhr.send(data);
                    xhr.addEventListener('load', function() {
                        
                        var result = JSON.parse(xhr.responseText);
    
                        if (result.result != 'ok') return;
                        console.log(result.output);
                        //document.getElementById('testoutput').value = result.output;
    
                    });
                    //  Turn off the click events
                    //this.removeListener('click');
                    //  Hide the login element
                    //this.setVisible(false);
                    //  Populate the text with whatever they typed in
                    //text.setText('Welcome ' + inputText.value);
                }
                else
                {
                    //  Flash the prompt 이거 뭔지 모르겠음 다른 곳에서 긁어옴
                    this.scene.tweens.add({
                        targets: text,
                        alpha: 0.2,
                        duration: 250,
                        ease: 'Power3',
                        yoyo: true
                    });
                            }
            console.log(" compile finish!!!");
           
        });

    }

    preUpdate(time, delta) {
        //console.log('state' + state);
        /*** 화면 이동시 entire code button 따라가도록 설정***/
        this.entire_code_button.x = this.worldView.x + 5;

        /*** 버튼 클릭마다 명령창 띄웠다 없앴다 ***/
        if(state == 0) {
            this.entire_code_button.on('pointerdown', () => { //명령창 띄우기
                this.commandbox.setVisible(true);
                text.setVisible(true);
                //this.slidebox(); //슬라이드 기능 수치가 중간에 이상해져서 될 때 있고 안 될 때 있음(일단 빼두겠음)
                state = 1;
            });
        } else {
            this.commandbox.x = this.worldView.x + 715; //화면 이동시 명령창 따라가도록 설정
            text.x = this.worldView.x + 760;
            this.graphics.fillRect(text.x -5, 100, 360, 550); // 화면 이동시 글이 보이는 판을 이동
            this.zone.x = text.x -5;
            this.zone.on('pointermove', function (pointer) {
                if (pointer.isDown){
                    text.y += (pointer.velocity.y / 8000);
                    text.y = Phaser.Math.Clamp(text.y, -400, 600);
                    //this.extext.setVisible(true);
                }
            });

            this.entire_code_button.on('pointerdown', () => {
                this.commandbox.setVisible(false);
                text.setVisible(false);
                state = 0;
            });
        }
    }
    /*** 명령창 슬라이드 함수 ***/
    //js 파일 분리 후 method?들 적용 안 돼서 에러 뜸 (어차피 지금 slide기능 제대로 작동 안되니 나중에 추가기능 넣을때 마저 수정해보겠음)
    /*slidebox() {
        scene.tweens.add({
            targets: this.commandbox,
            x: this.worldView.x + 415,
            ease: 'Power3'
        });
        //console.log("3:"+this.commandbox.x);
    }*/
    update(scene) { //@@@@@@@@@ 코드조각 넣은거 바로바로 업데이트 해줌.
        
        this.contenttext = 
            "#include <stdio.h> \n int main(){ \n " +  scene.code_zone_1 +  "(\"HI\"); \n }" 
            + "2번째 코드 : " +  scene.code_zone_2 + "\n3번째 코드 : " + scene.code_zone_3 ;

        text.setText(this.contenttext);
    }
}