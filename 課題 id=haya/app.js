$(function() {
    // ここに追記

    $(window).on("scroll",function() {
        // スクロール量を取得
        const scroll = $(window).scrollTop();
        
        // 画面の高さを取得
        const windowHeight = $(window).height();
        
        const haya=$("#haya")
        // それぞれのフェードインしたい対象までの高さを取得
        const boxHeight = haya.offset().top;

        // 条件式に合致する場合はis-activeを付与
        //スクロール量＋画面の高さ＞webのトップから対象までの高さ
        if(scroll + windowHeight > boxHeight) {
            haya.addClass("is-active");
        }
    });

    /*定数-トップまで戻る*/
    const toTop=$("#to-top");
    toTop.hide();
    /*定数-ヘッダー背景*/
    const menuback=$("#menu-background-color");
    menuback.hide();

    $(window).on("scroll",function(){
        /*トップまで戻るをフェードイン*/
        if($(this).scrollTop()>180){
            toTop.fadeIn(800);
        }else {
            toTop.fadeOut();
        }

        /*トップまで戻るをフェードイン*/
        if($(this).scrollTop()>10){
            menuback.fadeIn(800);
        }else{
            menuback.fadeOut();
        }
    });

    /*モーダル作成*/
    /*モーダルを消す*/
    $("#modal-container").hide();
    /*クリックイベントでフェードイン*/
    $("#search").on('click',function(){ 
        $("#modal-container").fadeIn();
    });
    /*モーダル背面のグレー背景をクリックでフェードアウト*/
    $("#modal-container").on('click',function(){ 
        $("#modal-container").fadeOut();
    });

    /*子要素クリック時に親要素のイベントも発生してしまうのをどうにかしたい
     → 子要素のイベントトリガー時に親要素のイベントを中止する*/
    $("#modal-body"/*子要素*/).click(function(event){
        event.stopPropagation();
    });

});