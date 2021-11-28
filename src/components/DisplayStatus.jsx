import React from "react";
import { Status, statusPrecisions } from "../class/Status";
import { InputNumber } from "../components/Common";
import { calculateBonus, floorStatus } from "../functions/Util";

export const DisplayStatus = (props) => {
  const { calculationBase, onchangeExtendStatus } = props;

  const displayStatus = new Status();
  summarizeDisplayStatus(
    displayStatus,
    calculationBase.characterStatus,
    calculationBase.weaponStatus,
    calculationBase.extendStatus
  );

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <BasicStatusTd
              title="Base HP"
              itemName="hpPercent"
              baseValue={displayStatus.baseHp}
              bonusValue={displayStatus.bonusHp}
              bonusPercent={displayStatus.hpPercent}
              extendPercent={calculationBase.extendStatus.hpPercent}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <BasicStatusTd
              title="Base ATK"
              itemName="atkPercent"
              baseValue={displayStatus.baseAtk}
              bonusValue={displayStatus.bonusAtk}
              bonusPercent={displayStatus.atkPercent}
              extendPercent={calculationBase.extendStatus.atkPercent}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <BasicStatusTd
              title="Base DEF"
              itemName="defPercent"
              baseValue={displayStatus.baseDef}
              bonusValue={displayStatus.bonusDef}
              bonusPercent={displayStatus.defPercent}
              extendPercent={calculationBase.extendStatus.defPercent}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="元素熟知"
              itemName="elementalMastery"
              baseValue={displayStatus.elementalMastery}
              bonusValue={calculationBase.extendStatus.elementalMastery}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="会心率"
              itemName="criticalRate"
              unit="%"
              baseValue={displayStatus.criticalRate}
              bonusValue={calculationBase.extendStatus.criticalRate}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="会心ダメージ"
              itemName="criticalDamage"
              unit="%"
              baseValue={displayStatus.criticalDamage}
              bonusValue={calculationBase.extendStatus.criticalDamage}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="与える治癒効果"
              itemName="healingBonus"
              unit="%"
              baseValue={displayStatus.healingBonus}
              bonusValue={calculationBase.extendStatus.healingBonus}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="受ける治癒効果"
              itemName="incomingHealingBonus"
              unit="%"
              baseValue={displayStatus.incomingHealingBonus}
              bonusValue={calculationBase.extendStatus.incomingHealingBonus}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="元素チャージ効率"
              itemName="energyRecharge"
              unit="%"
              baseValue={displayStatus.energyRecharge}
              bonusValue={calculationBase.extendStatus.energyRecharge}
              onChange={onchangeExtendStatus}
            />
            <td></td>
          </tr>
          <tr>
            <AdvancedStatusTd
              title="シールド強化"
              itemName="shieldStrength"
              unit="%"
              baseValue={displayStatus.shieldStrength}
              bonusValue={calculationBase.extendStatus.shieldStrength}
              onChange={onchangeExtendStatus}
            />
            <td></td>
          </tr>
          <tr>
            <AdvancedStatusTd
              title="風元素ダメージ"
              itemName="damageBonus.Anemo"
              unit="%"
              baseValue={displayStatus.damageBonus.Anemo}
              bonusValue={calculationBase.extendStatus.damageBonus.Anemo}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="氷元素ダメージ"
              itemName="damageBonus.Cryo"
              unit="%"
              baseValue={displayStatus.damageBonus.Cryo}
              bonusValue={calculationBase.extendStatus.damageBonus.Cryo}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="草元素ダメージ"
              itemName="damageBonus.Dendro"
              unit="%"
              baseValue={displayStatus.damageBonus.Dendro}
              bonusValue={calculationBase.extendStatus.damageBonus.Dendro}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="雷元素ダメージ"
              itemName="damageBonus.Electro"
              unit="%"
              baseValue={displayStatus.damageBonus.Electro}
              bonusValue={calculationBase.extendStatus.damageBonus.Electro}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="岩元素ダメージ"
              itemName="damageBonus.Geo"
              unit="%"
              baseValue={displayStatus.damageBonus.Geo}
              bonusValue={calculationBase.extendStatus.damageBonus.Geo}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="水元素ダメージ"
              itemName="damageBonus.Hydro"
              unit="%"
              baseValue={displayStatus.damageBonus.Hydro}
              bonusValue={calculationBase.extendStatus.damageBonus.Hydro}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="炎元素ダメージ"
              itemName="damageBonus.Pyro"
              unit="%"
              baseValue={displayStatus.damageBonus.Pyro}
              bonusValue={calculationBase.extendStatus.damageBonus.Pyro}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="物理ダメージ"
              itemName="damageBonus.Physical"
              unit="%"
              baseValue={displayStatus.damageBonus.Physical}
              bonusValue={calculationBase.extendStatus.damageBonus.Physical}
              onChange={onchangeExtendStatus}
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const BasicStatusTd = (props) => {
  const { title, itemName, unit, baseValue, bonusValue, bonusPercent, extendPercent, onChange } = props;
  return (
    <>
      <td className="td-title">{title}</td>
      <td className="td-basevalue">
        {baseValue}
        {unit !== null && unit}
      </td>
      <td className="td-bonusvalue">
        <p className="p-bonus">{bonusValue >= 0 ? "+" : "-"}</p>
        <p>
          {bonusValue}
          {unit !== null && unit}
        </p>
      </td>
      <td>
        <InputNumber itemName={itemName} value={extendPercent} onChange={onChange} />
      </td>
    </>
  );
};

const AdvancedStatusTd = (props) => {
  const { title, itemName, unit, baseValue, bonusValue, onChange } = props;
  return (
    <>
      <td className="td-title">{title}</td>
      <td className="td-basevalue">
        {baseValue}
        {unit !== null && unit}
      </td>
      <td className="td-bonusvalue">
        <p className="p-bonus">{/*Number(baseValue) + Number(bonusValue) >= 0 ? "+" : "-"*/}</p>
        {/*
          <p>
            {Number(bonusValue)}
            {unit !== null && unit}
          </p>
        */}
      </td>
      <td>
        <InputNumber itemName={itemName} value={bonusValue} onChange={onChange} />
      </td>
    </>
  );
};

const summarizeDisplayStatus = (display, character, weapon, extend) => {
  //HP
  display.baseHp = floorStatus(character.baseHp + weapon.baseHp + extend.baseHp, statusPrecisions.baseHp);
  display.bonusHp = floorStatus(character.bonusHp + weapon.bonusHp + extend.bonusHp, statusPrecisions.bonusHp);
  display.hpPercent = floorStatus(
    character.hpPercent + weapon.hpPercent + extend.hpPercent,
    statusPrecisions.hpPercent
  );
  //ATK
  display.baseAtk = floorStatus(character.baseAtk + weapon.baseAtk + extend.baseAtk, statusPrecisions.baseAtk);
  display.bonusAtk = floorStatus(character.bonusAtk + weapon.bonusAtk + extend.bonusAtk, statusPrecisions.bonusAtk);
  display.atkPercent = floorStatus(
    character.atkPercent + weapon.atkPercent + extend.atkPercent,
    statusPrecisions.atkPercent
  );
  //DEF
  display.baseDef = floorStatus(character.baseDef + weapon.baseDef + extend.baseDef, statusPrecisions.baseDef);
  display.bonusDef = floorStatus(character.bonusDef + weapon.bonusDef + extend.bonusDef, statusPrecisions.bonusDef);
  display.defPercent = floorStatus(
    character.defPercent + weapon.defPercent + extend.defPercent,
    statusPrecisions.defPercent
  );
  //元素熟知
  display.elementalMastery = floorStatus(
    character.elementalMastery + weapon.elementalMastery + extend.elementalMastery,
    statusPrecisions.elementalMastery
  );
  //会心率, 会心ダメージ
  display.criticalRate = floorStatus(
    character.criticalRate + weapon.criticalRate + extend.criticalRate,
    statusPrecisions.criticalRate
  );
  display.criticalDamage = floorStatus(
    character.criticalDamage + weapon.criticalDamage + extend.criticalDamage,
    statusPrecisions.criticalDamage
  );

  //治癒効果
  display.healingBonus = floorStatus(
    character.healingBonus + weapon.healingBonus + extend.healingBonus,
    statusPrecisions.healingBonus
  );
  display.incomingHealingBonus = floorStatus(
    character.incomingHealingBonus + weapon.incomingHealingBonus + extend.incomingHealingBonus,
    statusPrecisions.incomingHealingBonus
  );
  //元素チャージ効率
  display.energyRecharge = floorStatus(
    character.energyRecharge + weapon.energyRecharge + extend.energyRecharge,
    statusPrecisions.energyRecharge
  );
  //シールド強化
  display.shieldStrength = floorStatus(
    character.shieldStrength + weapon.shieldStrength + extend.shieldStrength,
    statusPrecisions.shieldStrength
  );
  //ダメージバフ
  display.damageBonus.Anemo = floorStatus(
    character.damageBonus.Anemo + weapon.damageBonus.Anemo + extend.damageBonus.Anemo,
    statusPrecisions.Anemo
  );
  display.damageBonus.Cryo = floorStatus(
    character.damageBonus.Cryo + weapon.damageBonus.Cryo + extend.damageBonus.Cryo,
    statusPrecisions.Cryo
  );
  display.damageBonus.Dendro = floorStatus(
    character.damageBonus.Dendro + weapon.damageBonus.Dendro + extend.damageBonus.Dendro,
    statusPrecisions.Dendro
  );
  display.damageBonus.Electro = floorStatus(
    character.damageBonus.Electro + weapon.damageBonus.Electro + extend.damageBonus.Electro,
    statusPrecisions.Electro
  );
  display.damageBonus.Geo = floorStatus(
    character.damageBonus.Geo + weapon.damageBonus.Geo + extend.damageBonus.Geo,
    statusPrecisions.Geo
  );
  display.damageBonus.Hydro = floorStatus(
    character.damageBonus.Hydro + weapon.damageBonus.Hydro + extend.damageBonus.Hydro,
    statusPrecisions.Hydro
  );
  display.damageBonus.Pyro = floorStatus(
    character.damageBonus.Pyro + weapon.damageBonus.Pyro + extend.damageBonus.Pyro,
    statusPrecisions.Pyro
  );
  display.damageBonus.Physical = floorStatus(
    character.damageBonus.Physical + weapon.damageBonus.Physical + extend.damageBonus.Physical,
    statusPrecisions.Physical
  );

  //HP, ATK, DEFのボーナス%加算
  display.bonusHp += Math.abs(calculateBonus(display.baseHp, display.hpPercent));
  display.bonusAtk += Math.abs(calculateBonus(display.baseAtk, display.atkPercent));
  display.bonusDef += Math.abs(calculateBonus(display.baseDef, display.defPercent));
};
