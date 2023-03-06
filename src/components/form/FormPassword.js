import { useController, useForm } from 'react-hook-form';
import { useState } from 'react';
import * as React from 'react';
import SvgIcons from '../../svg-icons/SvgIcons';

// eslint-disable-next-line react/prop-types
export default function FormPassword({ name, control, label }) {
  const { register } = useForm();
  const {
    field: { ref },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div className="relative">
      <input
        className="p-2 rounded-xl border w-full"
        type={showPassword ? 'text' : 'password'}
        name={name}
        placeholder={label}
        ref={register}
      />
      <div
        role="presentation"
        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
        onClick={handleClickShowPassword}
      >
        <SvgIcons width={20} height={17} icon={`${showPassword ? 'lockOn' : 'lockOff'}`} />
      </div>
    </div>
  );
}
