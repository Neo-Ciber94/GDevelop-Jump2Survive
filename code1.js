gdjs.GameCode = {};
gdjs.GameCode.GDCharacterObjects2_1final = [];

gdjs.GameCode.GDBackgroundObjects1= [];
gdjs.GameCode.GDBackgroundObjects2= [];
gdjs.GameCode.GDBackgroundObjects3= [];
gdjs.GameCode.GDBackgroundObjects4= [];
gdjs.GameCode.GDBackgroundObjects5= [];
gdjs.GameCode.GDBackgroundObjects6= [];
gdjs.GameCode.GDCharacterObjects1= [];
gdjs.GameCode.GDCharacterObjects2= [];
gdjs.GameCode.GDCharacterObjects3= [];
gdjs.GameCode.GDCharacterObjects4= [];
gdjs.GameCode.GDCharacterObjects5= [];
gdjs.GameCode.GDCharacterObjects6= [];
gdjs.GameCode.GDScoreTextObjects1= [];
gdjs.GameCode.GDScoreTextObjects2= [];
gdjs.GameCode.GDScoreTextObjects3= [];
gdjs.GameCode.GDScoreTextObjects4= [];
gdjs.GameCode.GDScoreTextObjects5= [];
gdjs.GameCode.GDScoreTextObjects6= [];
gdjs.GameCode.GDLivesTextObjects1= [];
gdjs.GameCode.GDLivesTextObjects2= [];
gdjs.GameCode.GDLivesTextObjects3= [];
gdjs.GameCode.GDLivesTextObjects4= [];
gdjs.GameCode.GDLivesTextObjects5= [];
gdjs.GameCode.GDLivesTextObjects6= [];
gdjs.GameCode.GDHeartsObjects1= [];
gdjs.GameCode.GDHeartsObjects2= [];
gdjs.GameCode.GDHeartsObjects3= [];
gdjs.GameCode.GDHeartsObjects4= [];
gdjs.GameCode.GDHeartsObjects5= [];
gdjs.GameCode.GDHeartsObjects6= [];
gdjs.GameCode.GDHeartBulletObjects1= [];
gdjs.GameCode.GDHeartBulletObjects2= [];
gdjs.GameCode.GDHeartBulletObjects3= [];
gdjs.GameCode.GDHeartBulletObjects4= [];
gdjs.GameCode.GDHeartBulletObjects5= [];
gdjs.GameCode.GDHeartBulletObjects6= [];
gdjs.GameCode.GDFloor1Objects1= [];
gdjs.GameCode.GDFloor1Objects2= [];
gdjs.GameCode.GDFloor1Objects3= [];
gdjs.GameCode.GDFloor1Objects4= [];
gdjs.GameCode.GDFloor1Objects5= [];
gdjs.GameCode.GDFloor1Objects6= [];
gdjs.GameCode.GDFloor2Objects1= [];
gdjs.GameCode.GDFloor2Objects2= [];
gdjs.GameCode.GDFloor2Objects3= [];
gdjs.GameCode.GDFloor2Objects4= [];
gdjs.GameCode.GDFloor2Objects5= [];
gdjs.GameCode.GDFloor2Objects6= [];
gdjs.GameCode.GDWallObjects1= [];
gdjs.GameCode.GDWallObjects2= [];
gdjs.GameCode.GDWallObjects3= [];
gdjs.GameCode.GDWallObjects4= [];
gdjs.GameCode.GDWallObjects5= [];
gdjs.GameCode.GDWallObjects6= [];
gdjs.GameCode.GDEnemyObjects1= [];
gdjs.GameCode.GDEnemyObjects2= [];
gdjs.GameCode.GDEnemyObjects3= [];
gdjs.GameCode.GDEnemyObjects4= [];
gdjs.GameCode.GDEnemyObjects5= [];
gdjs.GameCode.GDEnemyObjects6= [];
gdjs.GameCode.GDSpawnLeftObjects1= [];
gdjs.GameCode.GDSpawnLeftObjects2= [];
gdjs.GameCode.GDSpawnLeftObjects3= [];
gdjs.GameCode.GDSpawnLeftObjects4= [];
gdjs.GameCode.GDSpawnLeftObjects5= [];
gdjs.GameCode.GDSpawnLeftObjects6= [];
gdjs.GameCode.GDSpawnRightObjects1= [];
gdjs.GameCode.GDSpawnRightObjects2= [];
gdjs.GameCode.GDSpawnRightObjects3= [];
gdjs.GameCode.GDSpawnRightObjects4= [];
gdjs.GameCode.GDSpawnRightObjects5= [];
gdjs.GameCode.GDSpawnRightObjects6= [];
gdjs.GameCode.GDDebugTextObjects1= [];
gdjs.GameCode.GDDebugTextObjects2= [];
gdjs.GameCode.GDDebugTextObjects3= [];
gdjs.GameCode.GDDebugTextObjects4= [];
gdjs.GameCode.GDDebugTextObjects5= [];
gdjs.GameCode.GDDebugTextObjects6= [];
gdjs.GameCode.GDPlayerDamagedParticlesObjects1= [];
gdjs.GameCode.GDPlayerDamagedParticlesObjects2= [];
gdjs.GameCode.GDPlayerDamagedParticlesObjects3= [];
gdjs.GameCode.GDPlayerDamagedParticlesObjects4= [];
gdjs.GameCode.GDPlayerDamagedParticlesObjects5= [];
gdjs.GameCode.GDPlayerDamagedParticlesObjects6= [];
gdjs.GameCode.GDEnemyDestroyedParticlesObjects1= [];
gdjs.GameCode.GDEnemyDestroyedParticlesObjects2= [];
gdjs.GameCode.GDEnemyDestroyedParticlesObjects3= [];
gdjs.GameCode.GDEnemyDestroyedParticlesObjects4= [];
gdjs.GameCode.GDEnemyDestroyedParticlesObjects5= [];
gdjs.GameCode.GDEnemyDestroyedParticlesObjects6= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};


gdjs.GameCode.eventsList0 = function(runtimeScene) {

};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 95;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(0).getChild("Events"), "Spawn/EnemyRandom");
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(0, 100));
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Enemies").getChild("MaxSpeed").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Enemies").getChild("Killed")) * 5));
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "EnemySpawnTimer") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemySpawnTimer");
}
{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8418404);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(0).getChild("Events"), "Spawn/EnemyRandom");
}}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects1[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Score")));
}
}}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8437020);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "[Assets] Jump2Survive\\assets\\sound\\sfx_jump.ogg", false, 100, 1);
}}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameCode.GDCharacterObjects2);
{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects2[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameCode.GDCharacterObjects2);
{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects2[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameCode.GDCharacterObjects2);
{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects2[i].getBehavior("PlatformerObject").simulateControl("Down");
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameCode.GDCharacterObjects1);
{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameCode.GDCharacterObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCharacterObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCharacterObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCharacterObjects2[k] = gdjs.GameCode.GDCharacterObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCharacterObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.GDCharacterObjects2_1final.length = 0;gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
gdjs.GameCode.condition2IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.GameCode.GDCharacterObjects2, gdjs.GameCode.GDCharacterObjects3);

for(var i = 0, k = 0, l = gdjs.GameCode.GDCharacterObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCharacterObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.GameCode.condition0IsTrue_1.val = true;
        gdjs.GameCode.GDCharacterObjects3[k] = gdjs.GameCode.GDCharacterObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCharacterObjects3.length = k;if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDCharacterObjects3.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDCharacterObjects2_1final.indexOf(gdjs.GameCode.GDCharacterObjects3[j]) === -1 )
            gdjs.GameCode.GDCharacterObjects2_1final.push(gdjs.GameCode.GDCharacterObjects3[j]);
    }
}
}
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameCode.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.GameCode.condition2IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.GameCode.GDCharacterObjects2_1final, gdjs.GameCode.GDCharacterObjects2);
}
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCharacterObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects2[i].setAnimationName("walking");
}
}{gdjs.evtTools.camera.centerCameraWithinLimits(runtimeScene, (gdjs.GameCode.GDCharacterObjects2.length !== 0 ? gdjs.GameCode.GDCharacterObjects2[0] : null), -(27), -(25), 1644, 621, true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameCode.GDCharacterObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCharacterObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCharacterObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCharacterObjects2[k] = gdjs.GameCode.GDCharacterObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCharacterObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCharacterObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects2[i].setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameCode.GDCharacterObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCharacterObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCharacterObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCharacterObjects2[k] = gdjs.GameCode.GDCharacterObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCharacterObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCharacterObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects2[i].setAnimationName("jump");
}
}
{ //Subevents
gdjs.GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameCode.GDCharacterObjects2);
{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects2[i].returnVariable(gdjs.GameCode.GDCharacterObjects2[i].getVariables().getFromIndex(1)).setNumber(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects2[i].flipX(false);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameCode.GDCharacterObjects2);
{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects2[i].returnVariable(gdjs.GameCode.GDCharacterObjects2[i].getVariables().getFromIndex(1)).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects2[i].flipX(true);
}
}}

}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHeartBulletObjects1Objects = Hashtable.newFrom({"HeartBullet": gdjs.GameCode.GDHeartBulletObjects1});
gdjs.GameCode.eventsList8 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameCode.GDCharacterObjects1);
gdjs.GameCode.GDHeartBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHeartBulletObjects1Objects, (( gdjs.GameCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCharacterObjects1[0].getPointX("Center")), (( gdjs.GameCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCharacterObjects1[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.GameCode.GDHeartBulletObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHeartBulletObjects1[i].setSize(28, 24);
}
}{for(var i = 0, len = gdjs.GameCode.GDHeartBulletObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHeartBulletObjects1[i].addPolarForce(0, 700 * (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDCharacterObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCharacterObjects1[0].getVariables()).getFromIndex(1))), 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Player").getChild("HP").sub(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "[Assets] Jump2Survive\\assets\\sound\\sfx_shot.ogg", false, 100, 1);
}}

}


};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8394956);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "[Assets] Jump2Survive\\assets\\sound\\sfx_oneleft.ogg", false, 100, 1);
}}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameCode.GDCharacterObjects3);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCharacterObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCharacterObjects3[i].getVariableNumber(gdjs.GameCode.GDCharacterObjects3[i].getVariables().getFromIndex(2)) == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCharacterObjects3[k] = gdjs.GameCode.GDCharacterObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCharacterObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCharacterObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects3[i].setOpacity(90);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameCode.GDCharacterObjects3);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCharacterObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCharacterObjects3[i].getVariableNumber(gdjs.GameCode.GDCharacterObjects3[i].getVariables().getFromIndex(2)) == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCharacterObjects3[k] = gdjs.GameCode.GDCharacterObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCharacterObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCharacterObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects3[i].setOpacity(1000);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameCode.GDCharacterObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCharacterObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCharacterObjects2[i].getTimerElapsedTimeInSecondsOrNaN("PlayerInvulnerableTimer") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCharacterObjects2[k] = gdjs.GameCode.GDCharacterObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCharacterObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCharacterObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCharacterObjects2[i].getVariableNumber(gdjs.GameCode.GDCharacterObjects2[i].getVariables().getFromIndex(2)) == 1 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCharacterObjects2[k] = gdjs.GameCode.GDCharacterObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCharacterObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCharacterObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects2[i].returnVariable(gdjs.GameCode.GDCharacterObjects2[i].getVariables().getFromIndex(2)).setNumber(0);
}
}}

}


};gdjs.GameCode.eventsList11 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Player").getChild("HP")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Player").getChild("MaxHP"));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Player").getChild("HP").add(1);
}}

}


};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameCode.GDCharacterObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Player").getChild("HP")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Player").getChild("MaxHP"));
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCharacterObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCharacterObjects2[i].getVariableNumber(gdjs.GameCode.GDCharacterObjects2[i].getVariables().getFromIndex(3)) == 0 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCharacterObjects2[k] = gdjs.GameCode.GDCharacterObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCharacterObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCharacterObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects2[i].unpauseTimer("PlayerRegenerationTimer");
}
}{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects2[i].resetTimer("PlayerRegenerationTimer");
}
}{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects2[i].returnVariable(gdjs.GameCode.GDCharacterObjects2[i].getVariables().getFromIndex(3)).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameCode.GDCharacterObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCharacterObjects1[i].getTimerElapsedTimeInSecondsOrNaN("PlayerRegenerationTimer") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCharacterObjects1[k] = gdjs.GameCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCharacterObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCharacterObjects1[i].getVariableNumber(gdjs.GameCode.GDCharacterObjects1[i].getVariables().getFromIndex(3)) == 1 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCharacterObjects1[k] = gdjs.GameCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCharacterObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects1[i].resetTimer("PlayerRegenerationTimer");
}
}{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects1[i].pauseTimer("PlayerRegenerationTimer");
}
}{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects1[i].returnVariable(gdjs.GameCode.GDCharacterObjects1[i].getVariables().getFromIndex(3)).setNumber(0);
}
}
{ //Subevents
gdjs.GameCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Hearts"), gdjs.GameCode.GDHeartsObjects2);
{for(var i = 0, len = gdjs.GameCode.GDHeartsObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHeartsObjects2[i].setWidth(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Player").getChild("HP")) * 28);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Player").getChild("HP")) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Player").getChild("HP")) <= 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameCode.GDCharacterObjects2);
{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(0).getChild("Events"), "Player/GameOver");
}{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects2[i].returnVariable(gdjs.GameCode.GDCharacterObjects2[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{


gdjs.GameCode.eventsList10(runtimeScene);
}


{


gdjs.GameCode.eventsList12(runtimeScene);
}


};gdjs.GameCode.eventsList14 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8384588);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(0).getChild("Events"), "Player/IncreaseMaxHP");
}}

}


};gdjs.GameCode.eventsList15 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Enemies").getChild("Killed")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Enemies").getChild("KilledHPBonus"));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Enemies").getChild("KilledHPBonus").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Enemies").getChild("KilledHPBonus")) * 2);
}
{ //Subevents
gdjs.GameCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList16 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 10;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects3[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects3Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWallObjects3Objects = Hashtable.newFrom({"Wall": gdjs.GameCode.GDWallObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.GameCode.GDWallObjects2});
gdjs.GameCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects3);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDEnemyObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyObjects3[i].getTimerElapsedTimeInSecondsOrNaN("EnemyJumpTimer") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDEnemyObjects3[k] = gdjs.GameCode.GDEnemyObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects3[i].resetTimer("EnemyJumpTimer");
}
}
{ //Subevents
gdjs.GameCode.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects3);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDEnemyObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyObjects3[i].getVariableNumber(gdjs.GameCode.GDEnemyObjects3[i].getVariables().getFromIndex(0)) == -(1) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDEnemyObjects3[k] = gdjs.GameCode.GDEnemyObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyObjects3.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects3[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects3[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects3);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDEnemyObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyObjects3[i].getVariableNumber(gdjs.GameCode.GDEnemyObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDEnemyObjects3[k] = gdjs.GameCode.GDEnemyObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyObjects3.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects3[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects3[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects3);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.GameCode.GDWallObjects3);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects3Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWallObjects3Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDWallObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDWallObjects3[i].getVariableString(gdjs.GameCode.GDWallObjects3[i].getVariables().get("Direction")) == "right" ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDWallObjects3[k] = gdjs.GameCode.GDWallObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDWallObjects3.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects3[i].returnVariable(gdjs.GameCode.GDEnemyObjects3[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.GameCode.GDWallObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWallObjects2Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDWallObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDWallObjects2[i].getVariableString(gdjs.GameCode.GDWallObjects2[i].getVariables().get("Direction")) == "left" ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDWallObjects2[k] = gdjs.GameCode.GDWallObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDWallObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].returnVariable(gdjs.GameCode.GDEnemyObjects2[i].getVariables().getFromIndex(0)).setNumber(-(1));
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects3Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHeartBulletObjects3Objects = Hashtable.newFrom({"HeartBullet": gdjs.GameCode.GDHeartBulletObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyDestroyedParticlesObjects3Objects = Hashtable.newFrom({"EnemyDestroyedParticles": gdjs.GameCode.GDEnemyDestroyedParticlesObjects3});
gdjs.GameCode.eventsList18 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Player").getChild("HP")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Player").getChild("MaxHP"));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Player").getChild("HP").add(1);
}}

}


{

/* Reuse gdjs.GameCode.GDEnemyObjects2 */

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyObjects2[i].getVariableNumber(gdjs.GameCode.GDEnemyObjects2[i].getVariables().getFromIndex(3)) == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDEnemyObjects2[k] = gdjs.GameCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(0).getChild("Events"), "Spawn/EnemyRandom");
}}

}


};gdjs.GameCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects3);
gdjs.copyArray(runtimeScene.getObjects("HeartBullet"), gdjs.GameCode.GDHeartBulletObjects3);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects3Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHeartBulletObjects3Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8401876);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects3 */
/* Reuse gdjs.GameCode.GDHeartBulletObjects3 */
gdjs.GameCode.GDEnemyDestroyedParticlesObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyDestroyedParticlesObjects3Objects, (( gdjs.GameCode.GDEnemyObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyObjects3[0].getCenterXInScene()), (( gdjs.GameCode.GDEnemyObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDEnemyObjects3[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.GameCode.GDHeartBulletObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHeartBulletObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects3[i].returnVariable(gdjs.GameCode.GDEnemyObjects3[i].getVariables().getFromIndex(2)).sub(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "[Assets] Jump2Survive\\assets\\sound\\sfx_hit.ogg", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyObjects2[i].getVariableNumber(gdjs.GameCode.GDEnemyObjects2[i].getVariables().getFromIndex(2)) <= 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDEnemyObjects2[k] = gdjs.GameCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Score").add((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDEnemyObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDEnemyObjects2[0].getVariables()).getFromIndex(1))));
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Enemies").getChild("Killed").add(1);
}
{ //Subevents
gdjs.GameCode.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.GameCode.GDCharacterObjects1});
gdjs.GameCode.eventsList20 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8386460);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Player").getChild("HP").sub(1);
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(0).getChild("Events"), "Player/Damaged");
}{gdjs.evtTools.sound.playSound(runtimeScene, "[Assets] Jump2Survive\\assets\\sound\\sfx_hit.ogg", false, 100, 1);
}}

}


};gdjs.GameCode.eventsList21 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameCode.GDCharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCharacterObjects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCharacterObjects1[i].getVariableNumber(gdjs.GameCode.GDCharacterObjects1[i].getVariables().getFromIndex(2)) == 0 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCharacterObjects1[k] = gdjs.GameCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCharacterObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList20(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList22 = function(runtimeScene) {

{


gdjs.GameCode.eventsList17(runtimeScene);
}


{


gdjs.GameCode.eventsList19(runtimeScene);
}


{


gdjs.GameCode.eventsList21(runtimeScene);
}


};gdjs.GameCode.eventsList23 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 50;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(0).getChild("Events"), "Spawn/EnemyRight");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 50);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(0).getChild("Events"), "Spawn/EnemyLeft");
}}

}


};gdjs.GameCode.eventsList24 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("CurrentEvent")) == "Spawn/EnemyRandom";
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList23(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList25 = function(runtimeScene) {

{


gdjs.GameCode.eventsList24(runtimeScene);
}


};gdjs.GameCode.eventsList26 = function(runtimeScene) {

{


const keyIteratorReference3 = runtimeScene.getVariables().getFromIndex(0).getChild("EventIndex");
const valueIteratorReference3 = runtimeScene.getVariables().getFromIndex(0).getChild("CurrentEvent");
const iterableReference3 = runtimeScene.getVariables().getFromIndex(0).getChild("Events");
if(!iterableReference3.isPrimitive()) {
for(
    const iteratorKey3 in 
    iterableReference3.getType() === "structure"
      ? iterableReference3.getAllChildren()
      : iterableReference3.getType() === "array"
        ? iterableReference3.getAllChildrenArray()
        : []
) {
    if(iterableReference3.getType() === "structure")
        keyIteratorReference3.setString(iteratorKey3);
    else if(iterableReference3.getType() === "array")
        keyIteratorReference3.setNumber(iteratorKey3);
    const structureChildVariable3 = iterableReference3.getChild(iteratorKey3)
    valueIteratorReference3.castTo(structureChildVariable3.getType())
    if(structureChildVariable3.isPrimitive()) {
        valueIteratorReference3.setValue(structureChildVariable3.getValue());
    } else if (structureChildVariable3.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference3.replaceChildren(structureChildVariable3.getAllChildren());
    } else if (structureChildVariable3.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference3.replaceChildrenArray(structureChildVariable3.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

if (true)
{

{ //Subevents: 
gdjs.GameCode.eventsList25(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects5Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects5});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects4Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects4});
gdjs.GameCode.eventsList27 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("CurrentEvent")) == "Spawn/EnemyRight";
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SpawnRight"), gdjs.GameCode.GDSpawnRightObjects5);
gdjs.GameCode.GDEnemyObjects5.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects5Objects, (( gdjs.GameCode.GDSpawnRightObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDSpawnRightObjects5[0].getCenterXInScene()), (( gdjs.GameCode.GDSpawnRightObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDSpawnRightObjects5[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects5[i].returnVariable(gdjs.GameCode.GDEnemyObjects5[i].getVariables().getFromIndex(0)).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects5[i].resetTimer("EnemyJumpTimer");
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects5[i].getBehavior("PlatformerObject").setMaxSpeed(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Enemies").getChild("MaxSpeed")));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("CurrentEvent")) == "Spawn/EnemyLeft";
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SpawnLeft"), gdjs.GameCode.GDSpawnLeftObjects4);
gdjs.GameCode.GDEnemyObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects4Objects, (( gdjs.GameCode.GDSpawnLeftObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDSpawnLeftObjects4[0].getCenterXInScene()), (( gdjs.GameCode.GDSpawnLeftObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDSpawnLeftObjects4[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects4[i].returnVariable(gdjs.GameCode.GDEnemyObjects4[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects4[i].resetTimer("EnemyJumpTimer");
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects4[i].getBehavior("PlatformerObject").setMaxSpeed(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Enemies").getChild("MaxSpeed")));
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerDamagedParticlesObjects5Objects = Hashtable.newFrom({"PlayerDamagedParticles": gdjs.GameCode.GDPlayerDamagedParticlesObjects5});
gdjs.GameCode.eventsList28 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("CurrentEvent")) == "Player/Damaged";
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameCode.GDCharacterObjects5);
gdjs.GameCode.GDPlayerDamagedParticlesObjects5.length = 0;

{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects5[i].returnVariable(gdjs.GameCode.GDCharacterObjects5[i].getVariables().getFromIndex(2)).setNumber(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDCharacterObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCharacterObjects5[i].resetTimer("PlayerInvulnerableTimer");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerDamagedParticlesObjects5Objects, (( gdjs.GameCode.GDCharacterObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDCharacterObjects5[0].getCenterXInScene()), (( gdjs.GameCode.GDCharacterObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDCharacterObjects5[0].getCenterYInScene()), "");
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("CurrentEvent")) == "Player/IncreaseMaxHP";
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Player").getChild("HP").add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Player").getChild("MaxHP").add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "[Assets] Jump2Survive\\assets\\sound\\sfx_start.ogg", false, 100, 5);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("CurrentEvent")) == "Player/GameOver";
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Player").getChild("HP").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Player").getChild("MaxHP").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Enemies").getChild("KilledHPBonus").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Enemies").getChild("Killed").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Enemies").getChild("MaxSpeed").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


};gdjs.GameCode.eventsList29 = function(runtimeScene) {

{


gdjs.GameCode.eventsList27(runtimeScene);
}


{


gdjs.GameCode.eventsList28(runtimeScene);
}


};gdjs.GameCode.eventsList30 = function(runtimeScene) {

{


const keyIteratorReference3 = runtimeScene.getVariables().getFromIndex(0).getChild("EventIndex");
const valueIteratorReference3 = runtimeScene.getVariables().getFromIndex(0).getChild("CurrentEvent");
const iterableReference3 = runtimeScene.getVariables().getFromIndex(0).getChild("Events");
if(!iterableReference3.isPrimitive()) {
for(
    const iteratorKey3 in 
    iterableReference3.getType() === "structure"
      ? iterableReference3.getAllChildren()
      : iterableReference3.getType() === "array"
        ? iterableReference3.getAllChildrenArray()
        : []
) {
    if(iterableReference3.getType() === "structure")
        keyIteratorReference3.setString(iteratorKey3);
    else if(iterableReference3.getType() === "array")
        keyIteratorReference3.setNumber(iteratorKey3);
    const structureChildVariable3 = iterableReference3.getChild(iteratorKey3)
    valueIteratorReference3.castTo(structureChildVariable3.getType())
    if(structureChildVariable3.isPrimitive()) {
        valueIteratorReference3.setValue(structureChildVariable3.getValue());
    } else if (structureChildVariable3.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference3.replaceChildren(structureChildVariable3.getAllChildren());
    } else if (structureChildVariable3.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference3.replaceChildrenArray(structureChildVariable3.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

if (true)
{

{ //Subevents: 
gdjs.GameCode.eventsList29(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.GameCode.eventsList31 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getVariables().getFromIndex(0).getChild("Events"));
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getVariables().getFromIndex(0).getChild("CurrentEvent"));
}{runtimeScene.getVariables().getFromIndex(0).getChild("EventIndex").setNumber(0);
}}

}


};gdjs.GameCode.eventsList32 = function(runtimeScene) {

{



}


{


gdjs.GameCode.eventsList26(runtimeScene);
}


{


gdjs.GameCode.eventsList30(runtimeScene);
}


{


gdjs.GameCode.eventsList31(runtimeScene);
}


};gdjs.GameCode.eventsList33 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemySpawnTimer");
}{gdjs.evtTools.sound.playSound(runtimeScene, "[Assets] Jump2Survive\\assets\\sound\\music.ogg", true, 100, 1);
}}

}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


{


gdjs.GameCode.eventsList7(runtimeScene);
}


{


gdjs.GameCode.eventsList8(runtimeScene);
}


{


gdjs.GameCode.eventsList13(runtimeScene);
}


{


gdjs.GameCode.eventsList15(runtimeScene);
}


{


gdjs.GameCode.eventsList22(runtimeScene);
}


{


gdjs.GameCode.eventsList32(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects2.length = 0;
gdjs.GameCode.GDBackgroundObjects3.length = 0;
gdjs.GameCode.GDBackgroundObjects4.length = 0;
gdjs.GameCode.GDBackgroundObjects5.length = 0;
gdjs.GameCode.GDBackgroundObjects6.length = 0;
gdjs.GameCode.GDCharacterObjects1.length = 0;
gdjs.GameCode.GDCharacterObjects2.length = 0;
gdjs.GameCode.GDCharacterObjects3.length = 0;
gdjs.GameCode.GDCharacterObjects4.length = 0;
gdjs.GameCode.GDCharacterObjects5.length = 0;
gdjs.GameCode.GDCharacterObjects6.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects4.length = 0;
gdjs.GameCode.GDScoreTextObjects5.length = 0;
gdjs.GameCode.GDScoreTextObjects6.length = 0;
gdjs.GameCode.GDLivesTextObjects1.length = 0;
gdjs.GameCode.GDLivesTextObjects2.length = 0;
gdjs.GameCode.GDLivesTextObjects3.length = 0;
gdjs.GameCode.GDLivesTextObjects4.length = 0;
gdjs.GameCode.GDLivesTextObjects5.length = 0;
gdjs.GameCode.GDLivesTextObjects6.length = 0;
gdjs.GameCode.GDHeartsObjects1.length = 0;
gdjs.GameCode.GDHeartsObjects2.length = 0;
gdjs.GameCode.GDHeartsObjects3.length = 0;
gdjs.GameCode.GDHeartsObjects4.length = 0;
gdjs.GameCode.GDHeartsObjects5.length = 0;
gdjs.GameCode.GDHeartsObjects6.length = 0;
gdjs.GameCode.GDHeartBulletObjects1.length = 0;
gdjs.GameCode.GDHeartBulletObjects2.length = 0;
gdjs.GameCode.GDHeartBulletObjects3.length = 0;
gdjs.GameCode.GDHeartBulletObjects4.length = 0;
gdjs.GameCode.GDHeartBulletObjects5.length = 0;
gdjs.GameCode.GDHeartBulletObjects6.length = 0;
gdjs.GameCode.GDFloor1Objects1.length = 0;
gdjs.GameCode.GDFloor1Objects2.length = 0;
gdjs.GameCode.GDFloor1Objects3.length = 0;
gdjs.GameCode.GDFloor1Objects4.length = 0;
gdjs.GameCode.GDFloor1Objects5.length = 0;
gdjs.GameCode.GDFloor1Objects6.length = 0;
gdjs.GameCode.GDFloor2Objects1.length = 0;
gdjs.GameCode.GDFloor2Objects2.length = 0;
gdjs.GameCode.GDFloor2Objects3.length = 0;
gdjs.GameCode.GDFloor2Objects4.length = 0;
gdjs.GameCode.GDFloor2Objects5.length = 0;
gdjs.GameCode.GDFloor2Objects6.length = 0;
gdjs.GameCode.GDWallObjects1.length = 0;
gdjs.GameCode.GDWallObjects2.length = 0;
gdjs.GameCode.GDWallObjects3.length = 0;
gdjs.GameCode.GDWallObjects4.length = 0;
gdjs.GameCode.GDWallObjects5.length = 0;
gdjs.GameCode.GDWallObjects6.length = 0;
gdjs.GameCode.GDEnemyObjects1.length = 0;
gdjs.GameCode.GDEnemyObjects2.length = 0;
gdjs.GameCode.GDEnemyObjects3.length = 0;
gdjs.GameCode.GDEnemyObjects4.length = 0;
gdjs.GameCode.GDEnemyObjects5.length = 0;
gdjs.GameCode.GDEnemyObjects6.length = 0;
gdjs.GameCode.GDSpawnLeftObjects1.length = 0;
gdjs.GameCode.GDSpawnLeftObjects2.length = 0;
gdjs.GameCode.GDSpawnLeftObjects3.length = 0;
gdjs.GameCode.GDSpawnLeftObjects4.length = 0;
gdjs.GameCode.GDSpawnLeftObjects5.length = 0;
gdjs.GameCode.GDSpawnLeftObjects6.length = 0;
gdjs.GameCode.GDSpawnRightObjects1.length = 0;
gdjs.GameCode.GDSpawnRightObjects2.length = 0;
gdjs.GameCode.GDSpawnRightObjects3.length = 0;
gdjs.GameCode.GDSpawnRightObjects4.length = 0;
gdjs.GameCode.GDSpawnRightObjects5.length = 0;
gdjs.GameCode.GDSpawnRightObjects6.length = 0;
gdjs.GameCode.GDDebugTextObjects1.length = 0;
gdjs.GameCode.GDDebugTextObjects2.length = 0;
gdjs.GameCode.GDDebugTextObjects3.length = 0;
gdjs.GameCode.GDDebugTextObjects4.length = 0;
gdjs.GameCode.GDDebugTextObjects5.length = 0;
gdjs.GameCode.GDDebugTextObjects6.length = 0;
gdjs.GameCode.GDPlayerDamagedParticlesObjects1.length = 0;
gdjs.GameCode.GDPlayerDamagedParticlesObjects2.length = 0;
gdjs.GameCode.GDPlayerDamagedParticlesObjects3.length = 0;
gdjs.GameCode.GDPlayerDamagedParticlesObjects4.length = 0;
gdjs.GameCode.GDPlayerDamagedParticlesObjects5.length = 0;
gdjs.GameCode.GDPlayerDamagedParticlesObjects6.length = 0;
gdjs.GameCode.GDEnemyDestroyedParticlesObjects1.length = 0;
gdjs.GameCode.GDEnemyDestroyedParticlesObjects2.length = 0;
gdjs.GameCode.GDEnemyDestroyedParticlesObjects3.length = 0;
gdjs.GameCode.GDEnemyDestroyedParticlesObjects4.length = 0;
gdjs.GameCode.GDEnemyDestroyedParticlesObjects5.length = 0;
gdjs.GameCode.GDEnemyDestroyedParticlesObjects6.length = 0;

gdjs.GameCode.eventsList33(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
