try{var dv_win = window._dv_win || window.parent._dv_win; dv_win['dvCallback_1617809392973590']($dv,window,'dc69227098124dc4bd194d25bfd91843','tps10257.doubleverify.com');}catch(e){try{var image=window.document.createElement('img');image.src=('https://tps.doubleverify.com/visit.jpg'||(window.location.protocol+'//tps30.doubleverify.com/visit.jpg'))+'?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_cbError='+encodeURIComponent(e.message)}catch(e){}}$dv.pubSub.subscribe ('ImpressionServed', $uid, 'SendAdEntitiesForMA', function() {var tag = $dv.tags[$uid];var targetWin = tag.t2tIframeWindow;if(!targetWin){var t2tIframeId = tag.t2tIframeId;if(t2tIframeId){var iFrame = window.parent.getElementById(t2tIframeId);if(iFrame){targetWin = iFrame.contentWindow;}}}if(targetWin){var dateNow = 0;if(Date.now){dateNow = Date.now();} else {dateNow = +new Date();}var message = {action : 'notifyMultipleAdsAdEntityInformationReady',adEntityInformation : {comparisonItems : [{name : 'cmp', value : 2038035, bitFlag : 1, maxTimeMS : 5000, eventToFire : 'CampaignMultipleAd'},{name : 'clcd', value : 796803, bitFlag : 2, maxTimeMS : 5000},{name : 'plmt', value : 16887153, bitFlag : 4, maxTimeMS : 5000},{name : 'mp', value : 5422, bitFlag : 8, maxTimeMS : 5000},{name : 'adv', value : 868983, bitFlag : 16, maxTimeMS : 5000, eventToFire : 'LobMultipleAd'},{name : 'cmpMP', value : 611410537954, bitFlag : 32, maxTimeMS : 5000}],dvTagCreatedTS : tag.t2tIframeCreationTime,visitJSPostMessageTS : dateNow}};var stringifyFunc = null;if(window.JSON){stringifyFunc = window.JSON.stringify;} else {if(window.parent && window.parent.JSON){stringifyFunc = window.parent.JSON.stringify;}}if(!stringifyFunc){return;}var msgString = stringifyFunc(message);targetWin.postMessage(msgString, '*');setTimeout(function(){targetWin.postMessage(msgString, '*');}, 100);setTimeout(function(){targetWin.postMessage(msgString, '*');}, 500);}});var dvObj = $dv;function np764531(g,i){function d(){function d(){function f(b,a){b=(i?"dvp_":"")+b;e[b]=a}var e={},a=function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(String.fromCharCode(parseInt(b.charAt(c)+b.charAt(c+1),32)));return a.join("")},h=window[a("3e313m3937313k3f3i")];h&&(a=h[a("3g3c313k363f3i3d")],f("pltfrm",a));(function(){var a=e;e={};if (a['pltfrm'])dvObj.registerEventCall(g,a,2E3,true)})()}try{d()}catch(f){}}try{dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",g,"np764531",d)}catch(f){}}
;np764531("dc69227098124dc4bd194d25bfd91843",false);$dv.pubSub.subscribe('ImpressionServed', 'dc69227098124dc4bd194d25bfd91843', 'wpdc', function() {try { var result = 0; var cur = window; var tryNum = 0; try {    while (!result && tryNum < 10) {        if (cur.maple != undefined) {            result = 1;            break;        }        if (cur == cur.parent)            break;        tryNum++;        cur = cur.parent;    } } catch (er) {}	if (result) {		$dv.registerEventCall('dc69227098124dc4bd194d25bfd91843', { dvp_maple: result});	}} catch (e) {}});$dv.tags[$uid].dc = $dv.tags[$uid].dc || [];$dv.tags[$uid].dc.push({"rq":{"av":98,"ic":true,"fc":true,"adc":1000,"mla":false,"ldav":30},"rp":{"mt":"ismms","pt":"ispmxpms"}});$dv.CommonData.deviceType = 2;$dv.CommonData.detectedDeliveryType = 2;$dv.tags[$uid].deviceType = 2;$dv.tags[$uid].detectedDeliveryType = 2;var impId = 'dc69227098124dc4bd194d25bfd91843';var dvObj = $dv;var rtnName = dvObj==window.$dv ? 'ImpressionServed' : 'BeforeDecisionRender';dvObj.pubSub.subscribe(rtnName, impId, 'SenseTag_RTN', function () { try {var maxTimesToSend=2;var avgX=0,avgY=0,avgZ=0,avgX2=0,avgY2=0,avgZ2=0,countAcc=0,accInterval=0;function dvDoMotion(){   try {       if (maxTimesToSend<=0) {           window.removeEventListener('devicemotion', dvDoMotion,false);           return;           }	    var motionData=event.accelerationIncludingGravity;	    if ((motionData.x) || (motionData.y) || (motionData.z)) {           var isError=0;           var x = 0;           if (motionData.x) x=motionData.x;           else isError+=1;           var y = 0;           if (motionData.y) y=motionData.y;           else isError+=1;           var z = 0;           if (motionData.z) z=motionData.z;           else isError+=1;	    	avgX = ((avgX * countAcc)+ x)/(countAcc+1);	    	avgX2 = ((avgX2 * countAcc)+(x * x))/(countAcc+1);	    	avgY = ((avgY * countAcc)+y)/(countAcc+1);	    	avgY2 = ((avgY2 * countAcc)+(y * y))/(countAcc+1);	    	avgZ = ((avgZ * countAcc)+z)/(countAcc+1);	    	avgZ2 = ((avgZ2 * countAcc)+(z * z))/(countAcc+1);	    	countAcc++;           accInterval = event.interval;	    	if(countAcc%400==1) {               if(isNaN(avgX)) avgX=10000;               if(isNaN(avgY)) avgY=10000;               if(isNaN(avgZ)) avgZ=10000;       		var varX=avgX2-avgX*avgX;if(isNaN(varX)) varX=Math.max(Math.min(avgX,10000),10000).toFixed(7);       		var varY=avgY2-avgY*avgY;if(isNaN(varY)) varY=Math.max(Math.min(avgY,10000),10000).toFixed(7);       		var varZ=avgZ2-avgZ*avgZ;if(isNaN(varZ)) varZ=Math.max(Math.min(avgZ,10000),10000).toFixed(7);              if(isNaN(accInterval)) accInterval=-1;               maxTimesToSend--;               sensorObj={};	    		sensorObj['MED_AMtX']=Math.max(Math.min(avgX,10000),-10000).toFixed(7);	    		sensorObj['MED_AMtY']=Math.max(Math.min(avgY,10000),-10000).toFixed(7);	    		sensorObj['MED_AMtZ']=Math.max(Math.min(avgZ,10000),-10000).toFixed(7);	    		sensorObj['MED_AVrX']=Math.max(Math.min((varX),10000),-10000).toFixed(7);	    		sensorObj['MED_AVrY']=Math.max(Math.min((varY),10000),-10000).toFixed(7);	    		sensorObj['MED_AVrZ']=Math.max(Math.min((varZ),10000),-10000).toFixed(7);	    		sensorObj['MED_ANum']=countAcc;	    		sensorObj['MED_AInterval']=accInterval;	    		dvObj.registerEventCall(impId,sensorObj,2000,true);	    	}	    }   } catch(e) {}}setTimeout(function() {   try {      if(window.addEventListener==undefined) return;      window.addEventListener('devicemotion', dvDoMotion);    }   catch(e) {};}, 3000);setTimeout(function(){    maxTimesToSend = 0;}, 840000);} catch (e) {}; });try{$dv.pubSub.publish('ImpressionServed', $uid);$dv.pubSub.publish('ImpressionServed', $frmId);}catch(e){}