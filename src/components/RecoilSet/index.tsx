import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "../../atoms";
import { ChangeEventHandler } from "react";

const RecoilSet = () => {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);

  const onMinutesChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.currentTarget.value);
    console.log(typeof e.currentTarget.value);
    // setMinutes(parseInt(e.currentTarget.value));
    console.log("123");
    setMinutes(Number(e.currentTarget.value));
  };

  const onHoursChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setHours(Number(e.currentTarget.value));
  };

  return (
    <div>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Hours"
      />
      <input
        type="number"
        value={hours}
        onChange={onHoursChange}
        placeholder="Minutes"
      />
    </div>
  );
};

export default RecoilSet;
