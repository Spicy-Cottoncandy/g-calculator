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
              itemName="hpPercent"
              baseValue={calculationBase.characterStatus.hp}
              bonusPercent={calculationBase.extendStatus.hpPercent}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <BasicStatusTd
              title="Base ATK"
              itemName="atkPercent"
              baseValue={calculationBase.characterStatus.atk}
              bonusPercent={calculationBase.extendStatus.atkPercent}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <BasicStatusTd
              title="Base DEF"
              itemName="defPercent"
              baseValue={calculationBase.characterStatus.def}
              bonusPercent={calculationBase.extendStatus.defPercent}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="元素熟知"
              itemName="elementalMastery"
              baseValue={calculationBase.characterStatus.elementalMastery}
              bonusValue={calculationBase.extendStatus.elementalMastery}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="会心率"
              itemName="criticalRate"
              unit="%"
              baseValue={calculationBase.characterStatus.criticalRate}
              bonusValue={calculationBase.extendStatus.criticalRate}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="会心ダメージ"
              itemName="criticalDamage"
              unit="%"
              baseValue={calculationBase.characterStatus.criticalDamage}
              bonusValue={calculationBase.extendStatus.criticalDamage}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="与える治癒効果"
              itemName="healingBonus"
              unit="%"
              baseValue={calculationBase.characterStatus.healingBonus}
              bonusValue={calculationBase.extendStatus.healingBonus}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="受ける治癒効果"
              itemName="incomingHealingBonus"
              unit="%"
              baseValue={calculationBase.characterStatus.incomingHealingBonus}
              bonusValue={calculationBase.extendStatus.incomingHealingBonus}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="元素チャージ効率"
              itemName="energyRecharge"
              unit="%"
              baseValue={calculationBase.characterStatus.energyRecharge}
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
              baseValue={calculationBase.characterStatus.shieldStrength}
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
              baseValue={calculationBase.characterStatus.damageBonus.Anemo}
              bonusValue={calculationBase.extendStatus.damageBonus.Anemo}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="氷元素ダメージ"
              itemName="damageBonus.Cryo"
              unit="%"
              baseValue={calculationBase.characterStatus.damageBonus.Cryo}
              bonusValue={calculationBase.extendStatus.damageBonus.Cryo}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="草元素ダメージ"
              itemName="damageBonus.Dendro"
              unit="%"
              baseValue={calculationBase.characterStatus.damageBonus.Dendro}
              bonusValue={calculationBase.extendStatus.damageBonus.Dendro}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="雷元素ダメージ"
              itemName="damageBonus.Electro"
              unit="%"
              baseValue={calculationBase.characterStatus.damageBonus.Electro}
              bonusValue={calculationBase.extendStatus.damageBonus.Electro}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="岩元素ダメージ"
              itemName="damageBonus.Geo"
              unit="%"
              baseValue={calculationBase.characterStatus.damageBonus.Geo}
              bonusValue={calculationBase.extendStatus.damageBonus.Geo}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="水元素ダメージ"
              itemName="damageBonus.Hydro"
              unit="%"
              baseValue={calculationBase.characterStatus.damageBonus.Hydro}
              bonusValue={calculationBase.extendStatus.damageBonus.Hydro}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="炎元素ダメージ"
              itemName="damageBonus.Pyro"
              unit="%"
              baseValue={calculationBase.characterStatus.damageBonus.Pyro}
              bonusValue={calculationBase.extendStatus.damageBonus.Pyro}
              onChange={onchangeExtendStatus}
            />
          </tr>
          <tr>
            <AdvancedStatusTd
              title="物理ダメージ"
              itemName="damageBonus.Physical"
              unit="%"
              baseValue={calculationBase.characterStatus.damageBonus.Physical}
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
  const { title, itemName, unit, baseValue, bonusPercent, onChange } = props;
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
        <InputNumber
          itemName={itemName}
          value={bonusPercent}
          onChange={onChange}
        />
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
        <p className="p-bonus">
          {Number(baseValue) + Number(bonusValue) >= 0 ? "+" : "-"}
        </p>
        <p>
          {Number(baseValue) + Number(bonusValue)}
          {unit !== null && unit}
        </p>
      </td>
      <td>
        <InputNumber
          itemName={itemName}
          value={bonusValue}
          onChange={onChange}
        />
      </td>
    </>
  );
};
