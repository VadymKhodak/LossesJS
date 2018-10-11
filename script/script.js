
function count(){

var TankNormTotal = 3.00;
var TankNormIL = 0.87;
var TankNormMajor = 1.330;
var TankNormMiddle = 0.86;
var TankNormCurrent = 0.93;
var IFVNormTotal = 2.73;
var IFVNormIL = 0.76;
var IFVNormMajor = 0.81;
var IFVNormMiddle = 0.45;
var IFVNormCurrent = 0.75;
var APCNormTotal = 3.45;
var APCNormIL = 1.41;
var APCNormMajor = 1.35;
var APCNormMiddle = 0.53;
var APCNormCurrent = 0.68;
var OtherNormTotal = 0.81;
var OtherNormIL = 0.21;
var OtherNormMajor = 0.09;
var OtherNormMiddle = 0.33;
var OtherNormCurrent = 0.42;

var Tank;
$("#Tank").keyup(function () {
	Tank = $(this).val();
}).keyup();
var IFV;
$("#IFV").keyup(function () {
	IFV = $(this).val();
}).keyup();
var APC;
$("#APC").keyup(function () {
	APC = $(this).val();
}).keyup();
var Other;
$("#Other").keyup(function () {
	Other = $(this).val();
}).keyup();

var Kf = $("#Kf").val();
var Krp = $("#Krp").val();
var Kd = $("#Kd").val();
var Ktr = $("#Ktr").val();
var Kb = $("#Kb").val();
var Khpw = $("#Khpw").val();

var Kr;
$("#Kr").keyup(function () {
	Kr = $(this).val();
}).keyup();

var Duration;
$("#Duration").keyup(function () {
	Duration = $(this).val();
}).keyup();

var Coefficient = Kf * Krp * Kd * Ktr / Kb * Khpw * Kr * 2;

var TankDailyIL = parseFloat((TankNormIL * Coefficient * Tank / 99).toFixed(2));
var TankDailyMajor = parseFloat((TankNormMajor * Coefficient * Tank / 99).toFixed(2));
var TankDailyMiddle = parseFloat((TankNormMiddle * Coefficient * Tank / 99).toFixed(2));
var TankDailyCurrent = parseFloat((TankNormCurrent * Coefficient * Tank / 99).toFixed(2));
var TankDailyTotal = parseFloat((TankDailyIL + TankDailyCurrent + TankDailyMiddle + TankDailyCurrent).toFixed(2));

var TankOperationIL = Math.round(TankDailyIL * Duration);
var TankOperationMajor = Math.round(TankDailyMajor * Duration);
var TankOperationMiddle = Math.round(TankDailyMiddle * Duration);
var TankOperationCurrent = Math.round(TankDailyCurrent * Duration);
var TankOperationTotal = Math.round(TankOperationIL + TankOperationMajor + TankOperationMiddle + TankOperationCurrent);

var IFVDailyIL = parseFloat((IFVNormIL * Coefficient * IFV / 99).toFixed(2));
var IFVDailyMajor = parseFloat((IFVNormMajor * Coefficient * IFV / 99).toFixed(2));
var IFVDailyMiddle = parseFloat((IFVNormMiddle * Coefficient * IFV / 99).toFixed(2));
var IFVDailyCurrent = parseFloat((IFVNormCurrent * Coefficient * IFV / 99).toFixed(2));
var IFVDailyTotal = parseFloat((IFVDailyIL + IFVDailyCurrent + IFVDailyMiddle + IFVDailyCurrent).toFixed(2));

var IFVOperationIL = Math.round(IFVDailyIL * Duration);
var IFVOperationMajor = Math.round(IFVDailyMajor * Duration);
var IFVOperationMiddle = Math.round(IFVDailyMiddle * Duration);
var IFVOperationCurrent = Math.round(IFVDailyCurrent * Duration);
var IFVOperationTotal = Math.round(IFVOperationIL + IFVOperationMajor + IFVOperationMiddle + IFVOperationCurrent);

var APCDailyIL = parseFloat((APCNormIL * Coefficient * APC / 99).toFixed(2));
var APCDailyMajor = parseFloat((APCNormMajor * Coefficient * APC / 99).toFixed(2));
var APCDailyMiddle = parseFloat((APCNormMiddle * Coefficient * APC / 99).toFixed(2));
var APCDailyCurrent = parseFloat((APCNormCurrent * Coefficient * APC / 99).toFixed(2));
var APCDailyTotal = parseFloat((APCDailyIL + APCDailyCurrent + APCDailyMiddle + APCDailyCurrent).toFixed(2));

var APCOperationIL = Math.round(APCDailyIL * Duration);
var APCOperationMajor = Math.round(APCDailyMajor * Duration);
var APCOperationMiddle = Math.round(APCDailyMiddle * Duration);
var APCOperationCurrent = Math.round(APCDailyCurrent * Duration);
var APCOperationTotal = Math.round(APCOperationIL + APCOperationMajor + APCOperationMiddle + APCOperationCurrent);

var OtherDailyIL = parseFloat((OtherNormIL * Coefficient * Other / 99).toFixed(2));
var OtherDailyMajor = parseFloat((OtherNormMajor * Coefficient * Other / 99).toFixed(2));
var OtherDailyMiddle = parseFloat((OtherNormMiddle * Coefficient * Other / 99).toFixed(2));
var OtherDailyCurrent = parseFloat((OtherNormCurrent * Coefficient * Other / 99).toFixed(2));
var OtherDailyTotal = parseFloat((OtherDailyIL + OtherDailyCurrent + OtherDailyMiddle + OtherDailyCurrent).toFixed(2));

var OtherOperationIL = Math.round(OtherDailyIL * Duration);
var OtherOperationMajor = Math.round(OtherDailyMajor * Duration);
var OtherOperationMiddle = Math.round(OtherDailyMiddle * Duration);
var OtherOperationCurrent = Math.round(OtherDailyCurrent * Duration);
var OtherOperationTotal = Math.round(OtherOperationIL + OtherOperationMajor + OtherOperationMiddle + OtherOperationCurrent);

var TotalDailyTotal	= parseFloat((TankDailyTotal + IFVDailyTotal + APCDailyTotal + OtherDailyTotal).toFixed(2));
var TotalDailyIL = parseFloat((TankDailyIL + IFVDailyIL + APCDailyIL + OtherDailyIL).toFixed(2));
var TotalDailyMajor = parseFloat((TankDailyMajor + IFVDailyMajor + APCDailyMajor + OtherDailyMajor).toFixed(2));
var TotalDailyMiddle = parseFloat((TankDailyMiddle + IFVDailyMiddle + APCDailyMiddle + OtherDailyMiddle).toFixed(2));
var TotalDailyCurrent = parseFloat((TankDailyCurrent + IFVDailyCurrent + APCDailyCurrent + OtherDailyCurrent).toFixed(2));

var TotalOperationTotal	= Math.round(TankOperationTotal + IFVOperationTotal + APCOperationTotal + OtherOperationTotal);
var TotalOperationIL = Math.round(TankOperationIL + IFVOperationIL + APCOperationIL + OtherOperationIL);
var TotalOperationMajor = Math.round(TankOperationMajor + IFVOperationMajor + APCOperationMajor + OtherOperationMajor);
var TotalOperationMiddle = Math.round(TankOperationMiddle + IFVOperationMiddle + APCOperationMiddle + OtherOperationMiddle);
var TotalOperationCurrent = Math.round(TankOperationCurrent + IFVOperationCurrent + APCOperationCurrent + OtherOperationCurrent);

$("#TankDailyIL").text(TankDailyIL);
$("#TankDailyMajor").text(TankDailyMajor);
$("#TankDailyMiddle").text(TankDailyMiddle);
$("#TankDailyCurrent").text(TankDailyCurrent);
$("#TankDailyTotal").text(TankDailyTotal);

$("#TankOperationIL").text(TankOperationIL);
$("#TankOperationMajor").text(TankOperationMajor);
$("#TankOperationMiddle").text(TankOperationMiddle);
$("#TankOperationCurrent").text(TankOperationCurrent);
$("#TankOperationTotal").text(TankOperationTotal);

$("#IFVDailyIL").text(IFVDailyIL);
$("#IFVDailyMajor").text(IFVDailyMajor);
$("#IFVDailyMiddle").text(IFVDailyMiddle);
$("#IFVDailyCurrent").text(IFVDailyCurrent);
$("#IFVDailyTotal").text(IFVDailyTotal);

$("#IFVOperationIL").text(IFVOperationIL);
$("#IFVOperationMajor").text(IFVOperationMajor);
$("#IFVOperationMiddle").text(IFVOperationMiddle);
$("#IFVOperationCurrent").text(IFVOperationCurrent);
$("#IFVOperationTotal").text(IFVOperationTotal);

$("#APCDailyIL").text(APCDailyIL);
$("#APCDailyMajor").text(APCDailyMajor);
$("#APCDailyMiddle").text(APCDailyMiddle);
$("#APCDailyCurrent").text(APCDailyCurrent);
$("#APCDailyTotal").text(APCDailyTotal);

$("#APCOperationIL").text(APCOperationIL);
$("#APCOperationMajor").text(APCOperationMajor);
$("#APCOperationMiddle").text(APCOperationMiddle);
$("#APCOperationCurrent").text(APCOperationCurrent);
$("#APCOperationTotal").text(APCOperationTotal);

$("#OtherDailyIL").text(OtherDailyIL);
$("#OtherDailyMajor").text(OtherDailyMajor);
$("#OtherDailyMiddle").text(OtherDailyMiddle);
$("#OtherDailyCurrent").text(OtherDailyCurrent);
$("#OtherDailyTotal").text(OtherDailyTotal);

$("#OtherOperationIL").text(OtherOperationIL);
$("#OtherOperationMajor").text(OtherOperationMajor);
$("#OtherOperationMiddle").text(OtherOperationMiddle);
$("#OtherOperationCurrent").text(OtherOperationCurrent);
$("#OtherOperationTotal").text(OtherOperationTotal);

$("#TotalDailyTotal").text(TotalDailyTotal);
$("#TotalDailyIL").text(TotalDailyIL);
$("#TotalDailyMajor").text(TotalDailyMajor);
$("#TotalDailyMiddle").text(TotalDailyMiddle);
$("#TotalDailyCurrent").text(TotalDailyCurrent);

$("#TotalOperationTotal").text(TotalOperationTotal);
$("#TotalOperationIL").text(TotalOperationIL);
$("#TotalOperationMajor").text(TotalOperationMajor);
$("#TotalOperationMiddle").text(TotalOperationMiddle);
$("#TotalOperationCurrent").text(TotalOperationCurrent);
}