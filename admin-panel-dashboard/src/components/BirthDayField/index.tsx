import { memo } from "react";

// Helpers
import { generateDays, generateTimes } from "@/helpers";

// Constants
import { MONTHS } from "@/constants";

// Types
import { BirthDay } from "@/types";

// Components
import { Select } from "@/components";

interface BirthdayProps {
  value: BirthDay;
  errorMessage?: string;
  disabled?: boolean;
  required?: boolean;
  onChange: (value: BirthDay) => void;
}

const BirthDayField = ({
  value,
  errorMessage = "",
  disabled = false,
  onChange,
}: BirthdayProps) => {
  const { months, date, years } = value ?? { months: "", date: 0, years: 0 };
  const currentYear = new Date();

  const handleChangeMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = event.target.value;
    onChange({ ...value, months: Number(optionValue) });
  };

  const handleChangeDay = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = event.target.value;
    onChange({ ...value, date: Number(optionValue) });
  };

  const handleChangeYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = event.target.value;
    onChange({ ...value, years: Number(optionValue) });
  };

  return (
    <>
      <p className="text-2xl text-tertiary mb-2">Date of Birth</p>
      <div className="flex flex-col md:flex-row gap-6">
        <Select
          data-testid="month"
          value={String(months)}
          disabled={disabled}
          required={true}
          label="Month"
          options={MONTHS}
          onChange={handleChangeMonth}
        />
        <Select
          data-testid="date"
          value={String(date)}
          disabled={disabled}
          required={true}
          label="Date"
          options={generateDays(Number(months), years)}
          onChange={handleChangeDay}
        />
        <Select
          data-testid="year"
          value={String(years)}
          disabled={disabled}
          required={true}
          label="Year"
          options={generateTimes(1900, currentYear.getFullYear())}
          onChange={handleChangeYear}
        />
      </div>
      {errorMessage && (
        <p className="text-xs text-red-500 pt-2">
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default memo(BirthDayField);
