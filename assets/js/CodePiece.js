class CodePiece extends Phaser.GameObjects.Text {
    constructor(scene) {
        super(scene);
// code_piece_arr
        scene.add.existing(this);

        //console.log("codepiece.js");
        this.codepiece_textObject_arr = []; // 텍스트 오브젝트를 배열로 생성해줌
        this.codepiece_textObject_y = 130 // 텍스트 오브젝트가 생성되는 y좌표를 지정해두고, 다음 코드조각의 위치에 반영 함
        this.stored_codepiece_count = 0; // 새로 추가한 코드조각 추가하는 함수에서 해당 조각만 추가하도록 하기 위함

        for (var i = 0; i < codepiece_string_arr.length; i++){
            this.codepiece_textObject_arr[i] = scene.add.text(15, this.codepiece_textObject_y, codepiece_string_arr[i], { font: "25px Arial Black", fill: "#f9cb9c" }).setInteractive();
            console.log(this.codepiece_textObject_arr[i]._text, this.codepiece_textObject_arr[i].x, this.codepiece_textObject_arr[i].y);
            scene.input.setDraggable(this.codepiece_textObject_arr[i]); // 드래그 가능하도록
            this.codepiece_textObject_y += 30; // 각 코드 조각 위치 설정
            this.stored_codepiece_count = i;
        }

    }
    update(scene) {
        if (scene.worldView.x != this.preworldview_x) { // 코드 조각 플레이어 따라 이동
            for (var i = 0; i < this.codepiece_textObject_arr.length; i++) {
                //console.log(scene.code_zone_1, this.codepiece_textObject_arr[i]._text)
                //console.log(this.codepiece_textObject_arr[0].x, scene.draganddrop_1.x - (scene.draganddrop_1.width / 2) + 5, scene.worldView.x + scene.dropzone1_x - (scene.draganddrop_1.width / 2) + 5);
                // 조건 설명
                // (scene.code_zone_1 == this.codepiece_textObject_arr[i]._text) : 태그조각 문자열과 해당 드랍존에 들어간 문자열이 같을 때 (어떤 드랍존에 위치해있는 지 알아야지 그 드랍존에 맞춰서 위치 이동 가능)
                // (this.codepiece_textObject_arr[i].x == scene.draganddrop_1.x - (scene.draganddrop_1.width / 2) + 5) : 같은 문자열일 경우 위의 조건에서 걸러지지 않음 -> 드랍존의 이전 위치와 비교해서 그 위치에 태그조각이 있을 경우를 추가 조건으로 줌
                if ((scene.code_zone_1 == this.codepiece_textObject_arr[i]._text) && (this.codepiece_textObject_arr[i].x == scene.draganddrop_1.x - (scene.draganddrop_1.width / 2) + 5)) { 
                    this.codepiece_textObject_arr[i].x = scene.worldView.x + scene.dropzone1_x - (scene.draganddrop_1.width / 2) + 5; // 현재 드랍존의 위치를 태그 조각에 반영 함.
                }
                if ((scene.code_zone_2 == this.codepiece_textObject_arr[i]._text) && (this.codepiece_textObject_arr[i].x == scene.draganddrop_2.x - (scene.draganddrop_2.width / 2) + 5)) { // 같은 태그라도 플레이어 따라 다 이동해야하므로 elseif 말고 if로 함
                    this.codepiece_textObject_arr[i].x = scene.worldView.x + scene.dropzone2_x - (scene.draganddrop_2.width / 2) + 5;
                }
                if ((scene.code_zone_3 == this.codepiece_textObject_arr[i]._text) && (this.codepiece_textObject_arr[i].x == scene.draganddrop_3.x - (scene.draganddrop_3.width / 2) + 5)) { 
                    this.codepiece_textObject_arr[i].x = scene.worldView.x + scene.dropzone3_x - (scene.draganddrop_3.width / 2) + 5;
                }
                if ((scene.code_zone_4 == this.codepiece_textObject_arr[i]._text) && (this.codepiece_textObject_arr[i].x == scene.draganddrop_4.x - (scene.draganddrop_4.width / 2) + 5)) { 
                    this.codepiece_textObject_arr[i].x = scene.worldView.x + scene.dropzone4_x - (scene.draganddrop_4.width / 2) + 5;
                }
                if ((scene.code_zone_5 == this.codepiece_textObject_arr[i]._text) && (this.codepiece_textObject_arr[i].x == scene.draganddrop_5.x - (scene.draganddrop_5.width / 2) + 5)) { 
                    this.codepiece_textObject_arr[i].x = scene.worldView.x + scene.dropzone5_x - (scene.draganddrop_5.width / 2) + 5;
                }
                if ((scene.code_zone_6 == this.codepiece_textObject_arr[i]._text) && (this.codepiece_textObject_arr[i].x == scene.draganddrop_6.x - (scene.draganddrop_6.width / 2) + 5)) { 
                    this.codepiece_textObject_arr[i].x = scene.worldView.x + scene.dropzone6_x - (scene.draganddrop_6.width / 2) + 5;
                }
                if ((scene.code_zone_7 == this.codepiece_textObject_arr[i]._text) && (this.codepiece_textObject_arr[i].x == scene.draganddrop_7.x - (scene.draganddrop_7.width / 2) + 5)) { 
                    this.codepiece_textObject_arr[i].x = scene.worldView.x + scene.dropzone7_x - (scene.draganddrop_7.width / 2) + 5;
                }
                if ((scene.code_zone_8 == this.codepiece_textObject_arr[i]._text) && (this.codepiece_textObject_arr[i].x == scene.draganddrop_8.x - (scene.draganddrop_8.width / 2) + 5)) { 
                    this.codepiece_textObject_arr[i].x = scene.worldView.x + scene.dropzone8_x - (scene.draganddrop_8.width / 2) + 5;
                }
                if (this.codepiece_textObject_arr[i].x < scene.worldView.x + 160) { // 인벤창 우측 끝보다 왼쪽에 있을 때 코드조각이 인벤창 안에 있다고 판단함 (드랍존에 안 들어가 있는 코드조각 플레이어 따라 이동하도록 하기)
                    this.codepiece_textObject_arr[i].x = scene.worldView.x + 15;
                }
                /*switch (this.codepiece_textObject_arr[i]._text) { // 드랍존에 들어가지 않은 코드 조각은 그냥 플레이어 따라가고
                    case scene.code_zone_1:         // 드랍존에 들어간 코드조각은 어는 드랍존인 지 구분하여 해당 드랍존 위치에 맞게 플레이어를 따라가도록 함
                        this.codepiece_textObject_arr[i].x = scene.worldView.x + scene.dropzone1_x - (scene.draganddrop_1.width / 2) + 5;
                        break;
                    case scene.code_zone_2:
                        this.codepiece_textObject_arr[i].x = scene.draganddrop_2.x - (scene.draganddrop_2.width / 2) + 5;
                        break;
                    case scene.code_zone_3:
                        this.codepiece_textObject_arr[i].x = scene.draganddrop_3.x - (scene.draganddrop_3.width / 2) + 5;
                        break;
                    case scene.code_zone_4:
                        this.codepiece_textObject_arr[i].x = scene.draganddrop_4.x - (scene.draganddrop_4.width / 2) + 5;
                        break;
                    case scene.code_zone_5:
                        this.codepiece_textObject_arr[i].x = scene.draganddrop_5.x - (scene.draganddrop_5.width / 2) + 5;
                        break;
                    case scene.code_zone_6:
                        this.codepiece_textObject_arr[i].x = scene.draganddrop_6.x - (scene.draganddrop_6.width / 2) + 5;
                        break;
                    case scene.code_zone_7:
                        this.codepiece_textObject_arr[i].x = scene.draganddrop_7.x - (scene.draganddrop_7.width / 2) + 5;
                        break;
                    case scene.code_zone_8:
                        this.codepiece_textObject_arr[i].x = scene.draganddrop_8.x - (scene.draganddrop_8.width / 2) + 5;
                        break;
                    case scene.code_zone_9:
                        this.codepiece_textObject_arr[i].x = scene.draganddrop_9.x - (scene.draganddrop_9.width / 2) + 5;
                        break;
                    case scene.code_zone_10:
                        this.codepiece_textObject_arr[i].x = scene.draganddrop_10.x - (scene.draganddrop_10.width / 2) + 5;
                        break;
                    case scene.code_zone_11:
                        this.codepiece_textObject_arr[i].x = scene.draganddrop_11.x - (scene.draganddrop_11.width / 2) + 5;
                        break;
                    case scene.code_zone_12:
                        this.codepiece_textObject_arr[i].x = scene.draganddrop_12.x - (scene.draganddrop_12.width / 2) + 5;
                        break;
                    case scene.code_zone_13:
                        this.codepiece_textObject_arr[i].x = scene.draganddrop_13.x - (scene.draganddrop_13.width / 2) + 5;
                        break;
                    case scene.code_zone_14:
                        this.codepiece_textObject_arr[i].x = scene.draganddrop_14.x - (scene.draganddrop_14.width / 2) + 5;
                        break;
                    default:
                        this.codepiece_textObject_arr[i].x = scene.worldView.x + 15;
                }*/
            }
            if (this.code_piece_for_repetition_arr != undefined) { // 여러번 사용가능한 코드조각에 대한 위치 이동 적용
                for (var i = 0; i < this.code_piece_for_repetition_arr.length; i++) {
                    //console.log(scene.code_zone_1, this.code_piece_for_repetition_arr[i]._text)
                    //console.log(this.code_piece_for_repetition_arr[0].x, scene.draganddrop_1.x - (scene.draganddrop_1.width / 2) + 5, scene.worldView.x + scene.dropzone1_x - (scene.draganddrop_1.width / 2) + 5);
                    // 조건 설명
                    // (scene.code_zone_1 == this.code_piece_for_repetition_arr[i]._text) : 태그조각 문자열과 해당 드랍존에 들어간 문자열이 같을 때 (어떤 드랍존에 위치해있는 지 알아야지 그 드랍존에 맞춰서 위치 이동 가능)
                    // (this.code_piece_for_repetition_arr[i].x == scene.draganddrop_1.x - (scene.draganddrop_1.width / 2) + 5) : 같은 문자열일 경우 위의 조건에서 걸러지지 않음 -> 드랍존의 이전 위치와 비교해서 그 위치에 태그조각이 있을 경우를 추가 조건으로 줌
                    if ((scene.code_zone_1 == this.code_piece_for_repetition_arr[i]._text) && (this.code_piece_for_repetition_arr[i].x == scene.draganddrop_1.x - (scene.draganddrop_1.width / 2) + 5)) { 
                        this.code_piece_for_repetition_arr[i].x = scene.worldView.x + scene.dropzone1_x - (scene.draganddrop_1.width / 2) + 5; // 현재 드랍존의 위치를 태그 조각에 반영 함.
                    }
                    if ((scene.code_zone_2 == this.code_piece_for_repetition_arr[i]._text) && (this.code_piece_for_repetition_arr[i].x == scene.draganddrop_2.x - (scene.draganddrop_2.width / 2) + 5)) { // 같은 태그라도 플레이어 따라 다 이동해야하므로 elseif 말고 if로 함
                        this.code_piece_for_repetition_arr[i].x = scene.worldView.x + scene.dropzone2_x - (scene.draganddrop_2.width / 2) + 5;
                    }
                    if ((scene.code_zone_3 == this.code_piece_for_repetition_arr[i]._text) && (this.code_piece_for_repetition_arr[i].x == scene.draganddrop_3.x - (scene.draganddrop_3.width / 2) + 5)) { 
                        this.code_piece_for_repetition_arr[i].x = scene.worldView.x + scene.dropzone3_x - (scene.draganddrop_3.width / 2) + 5;
                    }
                    if ((scene.code_zone_4 == this.code_piece_for_repetition_arr[i]._text) && (this.code_piece_for_repetition_arr[i].x == scene.draganddrop_4.x - (scene.draganddrop_4.width / 2) + 5)) { 
                        this.code_piece_for_repetition_arr[i].x = scene.worldView.x + scene.dropzone4_x - (scene.draganddrop_4.width / 2) + 5;
                    }
                    if ((scene.code_zone_5 == this.code_piece_for_repetition_arr[i]._text) && (this.code_piece_for_repetition_arr[i].x == scene.draganddrop_5.x - (scene.draganddrop_5.width / 2) + 5)) { 
                        this.code_piece_for_repetition_arr[i].x = scene.worldView.x + scene.dropzone5_x - (scene.draganddrop_5.width / 2) + 5;
                    }
                    if ((scene.code_zone_6 == this.code_piece_for_repetition_arr[i]._text) && (this.code_piece_for_repetition_arr[i].x == scene.draganddrop_6.x - (scene.draganddrop_6.width / 2) + 5)) { 
                        this.code_piece_for_repetition_arr[i].x = scene.worldView.x + scene.dropzone6_x - (scene.draganddrop_6.width / 2) + 5;
                    }
                    if ((scene.code_zone_7 == this.code_piece_for_repetition_arr[i]._text) && (this.code_piece_for_repetition_arr[i].x == scene.draganddrop_7.x - (scene.draganddrop_7.width / 2) + 5)) { 
                        this.code_piece_for_repetition_arr[i].x = scene.worldView.x + scene.dropzone7_x - (scene.draganddrop_7.width / 2) + 5;
                    }
                    if ((scene.code_zone_8 == this.code_piece_for_repetition_arr[i]._text) && (this.code_piece_for_repetition_arr[i].x == scene.draganddrop_8.x - (scene.draganddrop_8.width / 2) + 5)) { 
                        this.code_piece_for_repetition_arr[i].x = scene.worldView.x + scene.dropzone8_x - (scene.draganddrop_8.width / 2) + 5;
                    }
                    if (this.code_piece_for_repetition_arr[i].x < scene.worldView.x + 160) { // 코드조각 위치한 창 우측 끝보다 왼쪽에 있을 때 코드조각이 인벤창 안에 있다고 판단함 (드랍존에 안 들어가 있는 코드조각 플레이어 따라 이동하도록 하기)
                        
                        //console.log("오나?????",this.code_piece_for_repetition_arr[i].x)
                        this.code_piece_for_repetition_arr[i].x = scene.worldView.x + 15;
                    }
                }
            }
            this.preworldview_x = scene.worldView.x;
        }
    }

    code_piece_for_repetition(scene, repetition_code, x, y, num) {
        this.code_piece_for_repetition_arr = [];
        this.repetition_code_piece_x = x;
        this.repetition_code_piece_y = y;
        for (var i = 0; i < num; i++){
            this.code_piece_for_repetition_arr[i] = scene.add.text(x, y, repetition_code, { font: "25px Arial Black", fill: "#f9cb9c" }).setInteractive();
            
            scene.input.setDraggable(this.code_piece_for_repetition_arr[i]); // 드래그 가능하도록
        }
    }

    onoffwithcommand(scene) {
        //console.log("폰 열림상태 > "+scene.codeapp_onoff_state);
        if (scene.codeapp_onoff_state) { // 명령창이 나와있을 때 드랍존과 리셋버튼 나와 있도록
            //console.log('there');
            if (!scene.invenIn) { // 인벤 닫혀있을 때
                for (var i = 0; i < this.codepiece_textObject_arr.length; i++){
                    //console.log(this.codepiece_textObject_arr[i].x, scene.worldView.x + 715);
                    if (this.codepiece_textObject_arr[i].x > scene.worldView.x + 715) { // 폰 시작위치보다 오른 쪽에 위치한 코드조각은 드랍존에 들어있다 판단
                        this.codepiece_textObject_arr[i].setVisible(true);
                    }
                    else {
                        this.codepiece_textObject_arr[i].setVisible(false);
                    }
                }
                if (this.code_piece_for_repetition_arr != undefined) { // 코드 조각 여러개 사용가능할 때 적용
                    for (var i = 0; i < this.code_piece_for_repetition_arr.length; i++){
                        //console.log('1>',this.code_piece_for_repetition_arr[0].x,scene.draganddrop_1.x - (scene.draganddrop_1.width / 2) + 5);
                        if (this.code_piece_for_repetition_arr[i].x > scene.worldView.x + 715) {
                            this.code_piece_for_repetition_arr[i].setVisible(true);
                            //console.log("here");
                        }
                        else {
                            this.code_piece_for_repetition_arr[i].setVisible(false);
                            //console.log("there");
                        }
                        
                    }
                }
            } else { // 인벤 열려있을 때
                for (var i = 0; i < this.codepiece_textObject_arr.length; i++){
                    this.codepiece_textObject_arr[i].setVisible(true);
                }
                if (this.code_piece_for_repetition_arr != undefined) { // 코드 조각 여러개 사용가능할 때 적용
                    for (var i = 0; i < this.code_piece_for_repetition_arr.length; i++){
                        this.code_piece_for_repetition_arr[i].setVisible(true); 
                    }
                }
            }
        } else { // 명령창이 들어가있을 때 드랍존과 리셋버튼 들어가 있도록
            //console.log('here');
            if (!scene.invenIn) { // 인벤 닫혀있을 때
                for (var i = 0; i < this.codepiece_textObject_arr.length; i++){
                    this.codepiece_textObject_arr[i].setVisible(false);
                }
                if (this.code_piece_for_repetition_arr != undefined) { // 코드 조각 여러개 사용가능할 때 적용
                    for (var i = 0; i < this.code_piece_for_repetition_arr.length; i++){
                        this.code_piece_for_repetition_arr[i].setVisible(false); 
                    }
                }
            } else { // 인벤 열려있을 때
                for (var i = 0; i < this.codepiece_textObject_arr.length; i++){
                    //console.log(this.codepiece_textObject_arr.x[i], scene.worldView.x + 715);
                    if (this.codepiece_textObject_arr[i].x > scene.worldView.x + 715) {
                        this.codepiece_textObject_arr[i].setVisible(false);
                    }
                    else {
                        this.codepiece_textObject_arr[i].setVisible(true);
                    }
                }
                if (this.code_piece_for_repetition_arr != undefined) { // 코드 조각 여러개 사용가능할 때 적용
                    for (var i = 0; i < this.code_piece_for_repetition_arr.length; i++){
                        if (this.code_piece_for_repetition_arr[i].x > scene.worldView.x + 715) {
                            //console.log("here2");
                            this.code_piece_for_repetition_arr[i].setVisible(false);
                        }
                        else {
                            //console.log("there2");
                            this.code_piece_for_repetition_arr[i].setVisible(true);
                        }
                    }
                }
            }
        }
    }
    add_new_stage_codepiece(scene) { // 잔류하던 코드조각 외에 새로 추가된 코드조각 생성을 위한 함수
        console.log("저장된 코드조각 수",this.stored_codepiece_count);
        var new_codepiece_start_count;
        if (this.stored_codepiece_count == 0) {
            new_codepiece_start_count = 0;
        } else {
            new_codepiece_start_count = this.stored_codepiece_count + 1;
        }
        for(var i = new_codepiece_start_count; i < codepiece_string_arr.length; i++) {
            this.codepiece_textObject_arr[i] = scene.add.text(scene.worldView.x + 15, this.codepiece_textObject_y, codepiece_string_arr[i], { font: "25px Arial Black", fill: "#f9cb9c" }).setInteractive();
            scene.input.setDraggable(this.codepiece_textObject_arr[i]); // 드래그 가능하도록
            this.codepiece_textObject_y += 30; // 각 코드 조각 위치 설정
            this.stored_codepiece_count += 1;
        }
    }

}