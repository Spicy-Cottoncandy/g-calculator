import React, { useState } from "react";
import { CharacterLevels, CharacterBase } from "../data/items";
import { InputNumber } from "../Parts";
import { calculateBonus } from "../functions/Util";

export const BaseStatus = (props) => {
  const { level } = props;

  const [HPBonus, setHPBonus] = useState(0);
  const [ATKBonus, setATKBonus] = useState(0);
  const [DEFBonus, setDEFBonus] = useState(0);

  const [DamageBonus, setDamageBonus] = useState({
    Anemo: 0, //風
    Cryo: 0, //氷
    Dendro: 0, //草
    Electro: 0, //雷
    Geo: 0, //岩
    Hydro: 0, //水
    Pyro: 0, //炎
    Physical: 0 //物理
  });

  const onChangeHPBonus = (event) => {
    setHPBonus(event.target.value);
  };
  const onChangeATKBonus = (event) => {
    setATKBonus(event.target.value);
  };
  const onChangeDEFBonus = (event) => {
    setDEFBonus(event.target.value);
  };

  const onChangeAnemoDamageBonus = (event) => {
    setDamageBonus({ ...DamageBonus, Anemo: event.target.value });
  };

  const onChangeCryoDamageBonus = (event) => {
    setDamageBonus({ ...DamageBonus, Cryo: event.target.value });
  };

  const onChangeDendroDamageBonus = (event) => {
    setDamageBonus({ ...DamageBonus, Dendro: event.target.value });
  };
  const onChangeElectroDamageBonus = (event) => {
    setDamageBonus({ ...DamageBonus, Electro: event.target.value });
  };

  const onChangeGeoDamageBonus = (event) => {
    setDamageBonus({ ...DamageBonus, Geo: event.target.value });
  };

  const onChangeHydroDamageBonus = (event) => {
    setDamageBonus({ ...DamageBonus, Hydro: event.target.value });
  };

  const onChangePyroDamageBonus = (event) => {
    setDamageBonus({ ...DamageBonus, Pyro: event.target.value });
  };

  const onChangePhysicalDamageBonus = (event) => {
    setDamageBonus({ ...DamageBonus, Physical: event.target.value });
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <BaseStatusTd
              title="Base HP"
              basevalue={CharacterBase.HP[level]}
              bonusparcent={HPBonus}
              onChange={onChangeHPBonus}
            />
          </tr>
          <tr>
            <BaseStatusTd
              title="Base ATK"
              basevalue={CharacterBase.ATK[level]}
              bonusparcent={ATKBonus}
              onChange={onChangeATKBonus}
            />
          </tr>
          <tr>
            <BaseStatusTd
              title="Base DEF"
              basevalue={CharacterBase.DEF[level]}
              bonusparcent={DEFBonus}
              onChange={onChangeDEFBonus}
            />
          </tr>
          <tr>
            <td>元素熟知</td>
          </tr>
          <tr>
            <td>会心率</td>
          </tr>
          <tr>
            <td>会心ダメージ</td>
          </tr>
          <tr>
            <td>与える治癒効果</td>
          </tr>
          <tr>
            <td>受ける治癒効果</td>
          </tr>
          <tr>
            <td>元素チャージ効率</td>
          </tr>
          <tr>
            <td>シールド強化</td>
          </tr>
          <tr>
            <DamageBonusTd
              title="風元素ダメージ"
              basevalue={10}
              bonusparcent={DamageBonus["Anemo"]}
              onChange={onChangeAnemoDamageBonus}
            />
          </tr>
          <tr>
            <DamageBonusTd
              title="氷元素ダメージ"
              basevalue={10}
              bonusparcent={DamageBonus["Cryo"]}
              onChange={onChangeCryoDamageBonus}
            />
          </tr>
          <tr>
            <DamageBonusTd
              title="草元素ダメージ"
              basevalue={10}
              bonusparcent={DamageBonus["Dendro"]}
              onChange={onChangeDendroDamageBonus}
            />
          </tr>
          <tr>
            <DamageBonusTd
              title="雷元素ダメージ"
              basevalue={10}
              bonusparcent={DamageBonus["Electro"]}
              onChange={onChangeElectroDamageBonus}
            />
          </tr>
          <tr>
            <DamageBonusTd
              title="岩元素ダメージ"
              basevalue={10}
              bonusparcent={DamageBonus["Geo"]}
              onChange={onChangeGeoDamageBonus}
            />
          </tr>
          <tr>
            <DamageBonusTd
              title="水元素ダメージ"
              basevalue={10}
              bonusparcent={DamageBonus["Hydro"]}
              onChange={onChangeHydroDamageBonus}
            />
          </tr>
          <tr>
            <DamageBonusTd
              title="炎元素ダメージ"
              basevalue={10}
              bonusparcent={DamageBonus["Pyro"]}
              onChange={onChangePyroDamageBonus}
            />
          </tr>
          <tr>
            <DamageBonusTd
              title="物理ダメージ"
              basevalue={10}
              bonusparcent={DamageBonus["Physical"]}
              onChange={onChangePhysicalDamageBonus}
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const BaseStatusTd = (props) => {
  const { title, basevalue, bonusparcent, onChange } = props;
  return (
    <>
      <td className="td-title">{title}</td>
      <td className="td-basevalue">{basevalue}</td>
      <td className="td-bonusvalue">
        <p className="p-bonus">{bonusparcent >= 0 ? "+" : "-"}</p>
        <p>{Math.abs(calculateBonus(basevalue, bonusparcent))}</p>
      </td>
      <td>
        <InputNumber value={bonusparcent} onChange={onChange} />
      </td>
    </>
  );
};

const DamageBonusTd = (props) => {
  const { title, basevalue, bonusparcent, onChange } = props;
  return (
    <>
      <td>{title}</td>
      <td>{Number(basevalue) + Number(bonusparcent)}%</td>
      <td>
        <InputNumber value={bonusparcent} onChange={onChange} />
      </td>
    </>
  );
};
