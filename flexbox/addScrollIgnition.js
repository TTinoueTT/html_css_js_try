var scrollIgnitionObjects = []

function addScrollIgnition( targetName , ignitionArea , executeProcess ) {
    var obj = new Object();
    obj.targetName = targetName  //対象のname
    obj.ignitionArea = ignitionArea  //イベント発火エリア
    obj.executeProcess = executeProcess //
    scrollIgnitionObjects.push( obj )
}

function startScrollEvent() {
    $(window).scroll(function (){
        for( var i = 0 ; i < scrollIgnitionObjects.length ; i++ ) {
            if( scrollIgnitionObjects[i] != null ) {
    
                var element =  document.getElementsByName( scrollIgnitionObjects[i].targetName )[0]
                var ignitionArea = scrollIgnitionObjects[i].ignitionArea
                var clientRect = element.getBoundingClientRect() ;
                if ( Math.abs( clientRect.top ) < ignitionArea ){
                    scrollIgnitionObjects[i].executeProcess()
                    delete scrollIgnitionObjects[i]
                }
            }
        }
    })
}