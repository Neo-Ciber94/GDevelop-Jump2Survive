gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDBackgroundObjects1= [];
gdjs.Game_32OverCode.GDBackgroundObjects2= [];
gdjs.Game_32OverCode.GDTryAgainButtonObjects1= [];
gdjs.Game_32OverCode.GDTryAgainButtonObjects2= [];
gdjs.Game_32OverCode.GDFinalScoreObjects1= [];
gdjs.Game_32OverCode.GDFinalScoreObjects2= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition2IsTrue_0 = {val:false};
gdjs.Game_32OverCode.conditionTrue_1 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_1 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_1 = {val:false};
gdjs.Game_32OverCode.condition2IsTrue_1 = {val:false};


gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDTryAgainButtonObjects1Objects = Hashtable.newFrom({"TryAgainButton": gdjs.Game_32OverCode.GDTryAgainButtonObjects1});
gdjs.Game_32OverCode.asyncCallback8447036 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Score").setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}
gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Game_32OverCode.asyncCallback8447036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32OverCode.eventsList1 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition0IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8445724);
}
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "[Assets] Jump2Survive\\assets\\sound\\sfx_gameover.ogg", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TryAgainButton"), gdjs.Game_32OverCode.GDTryAgainButtonObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDTryAgainButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
gdjs.Game_32OverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "[Assets] Jump2Survive\\assets\\sound\\sfx_menuoption.ogg", false, 100, 1);
}
{ //Subevents
gdjs.Game_32OverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FinalScore"), gdjs.Game_32OverCode.GDFinalScoreObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDFinalScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDFinalScoreObjects1[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Score")));
}
}}

}


{


{
}

}


{



}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32OverCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32OverCode.GDTryAgainButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDTryAgainButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDFinalScoreObjects1.length = 0;
gdjs.Game_32OverCode.GDFinalScoreObjects2.length = 0;

gdjs.Game_32OverCode.eventsList1(runtimeScene);
return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
