var drop_state_1 = 0;
var drop_state_2 = 0;
var drop_state_3 = 0;

class DragAndDrop extends Phaser.GameObjects.Zone {
    constructor(scene, x, y, width, height) {
        super(scene, x, y, width, height);
        // ...
        scene.add.existing(this);
        
        /*** 드래그앤드랍 ***/        
        // 코드 조각 불러와 배치하기
        var code_piece = [];
        var code_piece_x = 460;

        //console.log('코드조각 수 : ' + scene.drag_piece.length);
        for (var i = 0; i < scene.drag_piece.length; i++){
            code_piece[i] = scene.add.text(code_piece_x, 55, scene.drag_piece[i], { font: "30px Arial Black", fill: "#ffccff" }).setInteractive();
            scene.input.setDraggable(code_piece[i]); // 드래그 가능하도록
            code_piece_x += 100; // 각 코드 조각 위치 설정
            
            code_piece[i].on('pointerover', function () { 
                //여기 부분
                code_piece[0].setTint(0xf9cb9c);
            });
            // 마우스가 코드 조각 벗어났을때 원래 색으로!
            code_piece[i].on('pointerout', function () { 
                code_piece[0].clearTint();
            });
        }

        // 마우스가 코드 조각 위에 위치했을 때 색 변하도록
        // for문 안에 넣으면 setInt 안 돼서 이건 각각 해줘야 함
        // 근데 각각 하면 코드조각 수가 여기서 배정한 수보다 적은 경우 선언 안 됐다고 에러 뜸.
        /*code_piece[0].on('pointerover', function () { 
            code_piece[0].setTint(0xf9cb9c);
        });
        // 마우스가 코드 조각 벗어났을때 원래 색으로!
        code_piece[0].on('pointerout', function () { 
            code_piece[0].clearTint();
        });*/

        // 드랍 영역 선으로 임시 표시
        var graphics = scene.add.graphics();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(x - width / 2, y - height / 2, width, height);
        
        // 드래그 하려고 선택한 거 맨 위로 올림
        scene.input.on('dragstart', function (pointer, gameObject) { 
            scene.children.bringToTop(gameObject);
        }, scene); 
        // 드래그해서 가는 동작 실시간으로? 보여줌
        scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });
        // 드랍 영역 안에 들어가면 영역 색 변환
        scene.input.on('dragenter', function (pointer, gameObject, dropZone) { 
            graphics.clear();
            graphics.lineStyle(2, 0x00ffff);
            graphics.strokeRect(x - width / 2, y - height / 2, width, height);
        });
        // 영역 벗어났을 때 원래 색으로
        scene.input.on('dragleave', function (pointer, gameObject, dropZone) { 
            graphics.clear();
            graphics.lineStyle(2, 0xffff00);
            graphics.strokeRect(x - width / 2, y - height / 2, width, height);
        });
        // 영역안에서도 지정된 부분에만 고정되는 듯
        scene.input.on('drop', function (pointer, gameObject, dropZone) {
            gameObject.x = dropZone.x - 50; // 이거 왜 위치 중앙이 아니라 오른쪽 밑에 치우치는 지 모르겠음.. 임의로 위치 조정해둠
            gameObject.y = dropZone.y - 15;

            if(dropZone.name == "1"){
                scene.code_zone_1 = gameObject._text;
                this.dropzone = 1; // dragend부분에서 쓰려하는데 거긴 파라미터에 dropZone없어서 여기서 지정해줌
            }
            else if (dropZone.name == "2"){
                scene.code_zone_2 = gameObject._text;
                this.dropzone = 2;
            }
            else if (dropZone.name == "3"){
                scene.code_zone_3 = gameObject._text;
                this.dropzone = 3;
            }

            //gameObject.input.enabled = false; // 한 번 드랍되면 더 못 움직이게
        });
        // 드랍 위치가 아니면 원래 자리로 돌아가도록 함 + 색 조정
        scene.input.on('dragend', function (pointer, gameObject, dropped) {
            //console.log(this.dropzone);
            //console.log(drop_state_1);
            //console.log(drop_state_2);
            //console.log(drop_state_3);
            switch (this.dropzone) {
                case 1:
                    if (!dropped || drop_state_1) {
                        gameObject.x = gameObject.input.dragStartX;
                        gameObject.y = gameObject.input.dragStartY;
                    }
                    setTimeout(function() {
                        drop_state_1 = 1;
                    }, 1000);
                    break;
                case 2:
                    if (!dropped || drop_state_2) {
                        gameObject.x = gameObject.input.dragStartX;
                        gameObject.y = gameObject.input.dragStartY;
                    }
                    setTimeout(function() {
                        drop_state_2 = 1;
                    }, 1000);
                    break;
                case 3:
                    if (!dropped || drop_state_3) {
                        gameObject.x = gameObject.input.dragStartX;
                        gameObject.y = gameObject.input.dragStartY;
                    }
                    setTimeout(function() {
                        drop_state_3 = 1;
                    }, 1000);
                    break;
                default:
                    console.log('DragAndDrop부분 dragend 부분에서 뭔가 잘못됨.');
            }
            
            graphics.clear();
            graphics.lineStyle(2, 0xffff00);
            graphics.strokeRect(x - width / 2, y - height / 2, width, height);
        });
        
        //초기화 시키기
        var reset_button = scene.add.image(710, 55, 'reset_button');
        reset_button.setInteractive();
        reset_button.on('pointerover', function () {
            reset_button.setTint(0x4A6BD6);
        });
        reset_button.on('pointerout', function () {
            reset_button.clearTint();
        });
        reset_button.on('pointerup', function () {
            console.log('reset');
            var code_piece_reset_x = 460;
            for (var i = 0; i < scene.drag_piece.length; i++){
                code_piece[i].x = code_piece_reset_x;
                code_piece[i].y = 55;
                code_piece_reset_x += 100;
            }
            drop_state_1 = 0;
            drop_state_2 = 0;
            drop_state_3 = 0;
        });
        
        if (scene.code_piece_add_state != 2) {
            for (var i = 0; i < scene.drag_piece.length; i++){
                code_piece[i].destroy();
            }
            //console.log('code piece destroyed');
                
            scene.code_piece_add_state += 1;
        }        
    } 
}