import React from "react";
import { InputNumber } from "../components/Common";
import { calculateBonus } from "../functions/Util";

export const BaseStatus = (props) => {
  const { calculationBase, onchangeExtendStatus } = props;

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <BasicStatusTd
              title="Base HP"
              item="hpPercent"
              baseValue={calculationBase.baseStatus.hp}
              bonusPercent={calculationBase.extendStatus.hpPercent}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <BasicStatusTd
              title="Base ATK"
              item="atkPercent"
              baseValue={calculationBase.baseStatus.atk}
              bonusPercent={calculationBase.extendStatus.atkPercent}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <BasicStatusTd
              title="Base DEF"
              item="defPercent"
              baseValue={calculationBase.baseStatus.def}
              bonusPercent={calculationBase.extendStatus.defPercent}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="元素熟知"
              item="elementalMastery"
              baseValue={calculationBase.baseStatus.elementalMastery}
              bonusValue={calculationBase.extendStatus.elementalMastery}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="会心率"
              item="criticalRate"
              unit="%"
              baseValue={calculationBase.baseStatus.criticalRate}
              bonusValue={calculationBase.extendStatus.criticalRate}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="会心ダメージ"
              item="criticalDamage"
              unit="%"
              baseValue={calculationBase.baseStatus.criticalDamage}
              bonusValue={calculationBase.extendStatus.criticalDamage}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="与える治癒効果"
              item="healingBonus"
              unit="%"
              baseValue={calculationBase.baseStatus.healingBonus}
              bonusValue={calculationBase.extendStatus.healingBonus}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="受ける治癒効果"
              item="incomingHealingBonus"
              unit="%"
              baseValue={calculationBase.baseStatus.incomingHealingBonus}
              bonusValue={calculationBase.extendStatus.incomingHealingBonus}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="元素チャージ効率"
              item="energyRecharge"
              unit="%"
              baseValue={calculationBase.baseStatus.energyRecharge}
              bonusValue={calculationBase.extendStatus.energyRecharge}
              onChange={onchangeExtendStatus}
            />
            <td></td>
          </tr>
          <tr>
            <AdvancedStatusTd
              title="シールド強化"
              item="shieldStrength"
              unit="%"
              baseValue={calculationBase.baseStatus.shieldStrength}
              bonusValue={calculationBase.extendStatus.shieldStrength}
              onChange={onchangeExtendStatus}
            />
            <td></td>
          </tr>
          <tr>
            <AdvancedStatusTd
              title="風元素ダメージ"
              item="damageBonus.Anemo"
              unit="%"
              baseValue={calculationBase.baseStatus.damageBonus.Anemo}
              bonusValue={calculationBase.extendStatus.damageBonus.Anemo}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="氷元素ダメージ"
              item="damageBonus.Cryo"
              unit="%"
              baseValue={calculationBase.baseStatus.damageBonus.Cryo}
              bonusValue={calculationBase.extendStatus.damageBonus.Cryo}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="草元素ダメージ"
              item="damageBonus.Dendro"
              unit="%"
              baseValue={calculationBase.baseStatus.damageBonus.Dendro}
              bonusValue={calculationBase.extendStatus.damageBonus.Dendro}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="雷元素ダメージ"
              item="damageBonus.Electro"
              unit="%"
              baseValue={calculationBase.baseStatus.damageBonus.Electro}
              bonusValue={calculationBase.extendStatus.damageBonus.Electro}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="岩元素ダメージ"
              item="damageBonus.Geo"
              unit="%"
              baseValue={calculationBase.baseStatus.damageBonus.Geo}
              bonusValue={calculationBase.extendStatus.damageBonus.Geo}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="水元素ダメージ"
              item="damageBonus.Hydro"
              unit="%"
              baseValue={calculationBase.baseStatus.damageBonus.Hydro}
              bonusValue={calculationBase.extendStatus.damageBonus.Hydro}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="炎元素ダメージ"
              item="damageBonus.Pyro"
              unit="%"
              baseValue={calculationBase.baseStatus.damageBonus.Pyro}
              bonusValue={calculationBase.extendStatus.damageBonus.Pyro}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="物理ダメージ"
              item="damageBonus.Physical"
              unit="%"
              baseValue={calculationBase.baseStatus.damageBonus.Physical}
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
  const { title, item, unit, baseValue, bonusPercent, onChange } = props;
  return (
    <>
      <td className="td-title">{title}</td>
      <td className="td-basevalue">
        {baseValue}
        {unit !== null && unit}
      </td>
      <td className="td-bonusvalue">
        <p className="p-bonus">{bonusPercent >= 0 ? "+" : "-"}</p>
        <p>
          {Math.abs(calculateBonus(baseValue, bonusPercent))}
          {unit !== null && unit}
        </p>
      </td>
      <td>
        <InputNumber item={item} value={bonusPercent} onChange={onChange} />
      </td>
    </>
  );
};

const AdvancedStatusTd = (props) => {
  const { title, item, unit, baseValue, bonusValue, onChange } = props;
  return (
    <>
      <td className="td-title">{title}</td>
      <td className="td-basevalue">
        {baseValue}
        {unit !== null && unit}
      </td>
      <td className="td-bonusvalue">
        <p className="p-bonus">
          {Number(baseValue) + Number(bonusValue) >= 0 ? "+" : "-"}
        </p>
        <p>
          {Number(baseValue) + Number(bonusValue)}
          {unit !== null && unit}
        </p>
      </td>
      <td>
        <InputNumber item={item} value={bonusValue} onChange={onChange} />
      </td>
    </>
  );
};
