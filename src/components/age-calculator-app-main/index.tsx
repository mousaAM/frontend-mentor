import { component$, useStore, useTask$ } from "@builder.io/qwik";
import { styles } from "./style";
import { Arrow } from "./assets/images/icon-arrow";
import { ValidDays, ValidMonth, ValidYear, CalculateAge } from "./functions";

export default component$(() => {
  const errors = useStore({
    days: "",
    month: "",
    year: "",
  });

  const date = useStore({
    dd: 0,
    mm: 0,
    yyyy: 0,
    result: {
      years: 0,
      months: 0,
      days: 0,
    },
  });

  useTask$(({ track }) => {
    track(() => date.dd);
    track(() => date.mm);
    track(() => date.yyyy);

    const validDate = date.dd && date.mm && date.yyyy;

    const validDays = ValidDays(date.yyyy, date.mm, date.dd);
    const validMonth = ValidMonth(date.yyyy, date.mm);
    const validYear = ValidYear(date.yyyy);

    if (validDays !== 1) {
      errors.days = validDays as string;
    } else {
      errors.days = "";
    }
    if (validMonth !== 1) {
      errors.month = validMonth as string;
    } else {
      errors.month = "";
    }
    if (validYear !== 1) {
      errors.year = validYear as string;
    } else {
      errors.year = "";
    }

    if (validDate && validYear === 1 && validMonth === 1 && validDays === 1) {
      const result = CalculateAge(date.yyyy, date.mm, date.dd);
      date.result = result;
    } else {
      date.result.years = 0;
      date.result.months = 0;
      date.result.days = 0;
    }
  });

  return (
    <>
      <div class="w-screen h-screen flex justify-center items-center bg-stone-100">
        <div class="bg-white sm:w-auto w-[90%] shadow py-8 sm:px-12 px-4 rounded-[24px] rounded-br-[100px]">
          <div class="w-full flex flex-row sm:justify-start justify-center items-center">
            <div class={styles.inputDiv}>
              <label
                class={`${styles.label} ${errors.days ? "text-red-400" : ""}`}
              >
                DAY
              </label>
              <input
                type="text"
                placeholder="DD"
                class={`${styles.input} ${errors.days ? "border-red-400" : ""}`}
                onKeyUp$={(event) => {
                  date.dd = parseInt((event.target as HTMLInputElement).value);
                }}
              />
              <span class={`${styles.span} ${errors.days ? "" : "hidden"}`}>
                {errors.days}
              </span>
            </div>
            <div class={styles.inputDiv}>
              <label
                class={`${styles.label} ${errors.month ? "text-red-400" : ""}`}
              >
                MONTH
              </label>
              <input
                type="text"
                placeholder="MM"
                class={`${styles.input} ${
                  errors.month ? "border-red-400" : ""
                }`}
                onKeyUp$={(event) => {
                  date.mm = parseInt((event.target as HTMLInputElement).value);
                }}
              />
              <span class={`${styles.span} ${errors.month ? "" : "hidden"}`}>
                {errors.month}
              </span>
            </div>
            <div class={styles.inputDiv}>
              <label
                class={`${styles.label}  ${errors.year ? "text-red-400" : ""}`}
              >
                YEAR
              </label>
              <input
                type="text"
                placeholder="YYYY"
                class={`${styles.input} ${errors.year ? "border-red-400" : ""}`}
                onKeyUp$={(event) => {
                  date.yyyy = parseInt(
                    (event.target as HTMLInputElement).value
                  );
                }}
              />
              <span class={`${styles.span} ${errors.year ? "" : "hidden"}`}>
                {errors.year}
              </span>
            </div>
          </div>

          <div class="sm:w-[500px] w-full sm:my-0 my-8 flex flex-row justify-center items-center">
            <div class="border-b-2 grow"></div>
            <div class="p-4 bg-violet-500 rounded-full">
              <Arrow class="w-[36px] h-[34px]" />
            </div>
            <div class="border-b-2 sm:hidden grow"></div>
          </div>

          <div class="flex flex-col">
            <div>
              <p class={styles.resultParagraph}>
                <span class={styles.resultSpan}>
                  {date.result.years ? date.result.years : "--"}
                </span>{" "}
                years
              </p>
            </div>
            <div>
              <p class={styles.resultParagraph}>
                <span class={styles.resultSpan}>
                  {date.result.months ? date.result.months : "--"}
                </span>{" "}
                months
              </p>
            </div>
            <div>
              <p class={styles.resultParagraph}>
                <span class={styles.resultSpan}>
                  {date.result.days ? date.result.days : "--"}
                </span>{" "}
                days
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
