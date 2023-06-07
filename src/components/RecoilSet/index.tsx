import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "../../atoms";
import { ChangeEventHandler } from "react";

const RecoilSet = () => {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const hours = useRecoilValue(hourSelector);

  const onMinutesChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setMinutes(parseInt(e.currentTarget.value, 10));
  };

  return (
    <div>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Hours"
      />
      <input type="number" value={hours} placeholder="Minutes" />
    </div>
  );
};

export default RecoilSet;
