gdjs.Main_32_32MenuCode = {};
gdjs.Main_32_32MenuCode.GDBackgroundObjects1= [];
gdjs.Main_32_32MenuCode.GDBackgroundObjects2= [];
gdjs.Main_32_32MenuCode.GDPlayButtonObjects1= [];
gdjs.Main_32_32MenuCode.GDPlayButtonObjects2= [];

gdjs.Main_32_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32_32MenuCode.condition2IsTrue_0 = {val:false};
gdjs.Main_32_32MenuCode.conditionTrue_1 = {val:false};
gdjs.Main_32_32MenuCode.condition0IsTrue_1 = {val:false};
gdjs.Main_32_32MenuCode.condition1IsTrue_1 = {val:false};
gdjs.Main_32_32MenuCode.condition2IsTrue_1 = {val:false};


gdjs.Main_32_32MenuCode.mapOfGDgdjs_46Main_9532_9532MenuCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.Main_32_32MenuCode.GDPlayButtonObjects1});
gdjs.Main_32_32MenuCode.asyncCallback8276388 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.sound.playSound(runtimeScene, "[Assets] Jump2Survive\\assets\\sound\\sfx_menuoption.ogg", false, 100, 1);
}}
gdjs.Main_32_32MenuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Main_32_32MenuCode.asyncCallback8276388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32_32MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.Main_32_32MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.Main_32_32MenuCode.conditionTrue_1 = gdjs.Main_32_32MenuCode.condition0IsTrue_0;
gdjs.Main_32_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8270692);
}
}if (gdjs.Main_32_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "[Assets] Jump2Survive\\assets\\sound\\music.ogg", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32_32MenuCode.GDPlayButtonObjects1);

gdjs.Main_32_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32_32MenuCode.mapOfGDgdjs_46Main_9532_9532MenuCode_46GDPlayButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Main_32_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
{ //Subevents
gdjs.Main_32_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Main_32_32MenuCode.condition0IsTrue_0.val) {
}

}


};

gdjs.Main_32_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32_32MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.Main_32_32MenuCode.GDPlayButtonObjects2.length = 0;

gdjs.Main_32_32MenuCode.eventsList1(runtimeScene);
return;

}

gdjs['Main_32_32MenuCode'] = gdjs.Main_32_32MenuCode;
