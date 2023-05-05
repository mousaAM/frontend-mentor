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
      <main class="w-screen min-h-[100vh] flex justify-center items-center bg-stone-100">
        <section class="bg-white sm:w-auto w-[90%] shadow py-8 sm:px-12 px-4 rounded-[24px] rounded-br-[100px]">
          <div
            role="group"
            class="w-full flex flex-row sm:justify-start justify-center items-center"
          >
            <div role="form" class={styles.inputDiv}>
              <label
                class={`${styles.label} ${
                  errors.days ? "text-[hsl(0,100%,67%)]" : ""
                }`}
              >
                DAY
              </label>
              <input
                type="text"
                placeholder="DD"
                class={`${styles.input} ${
                  errors.days ? "border-[hsl(0,100%,67%)]" : ""
                }`}
                onKeyUp$={(event) => {
                  date.dd = parseInt((event.target as HTMLInputElement).value);
                }}
              />
              <span class={`${styles.span} ${errors.days ? "" : "hidden"}`}>
                {errors.days}
              </span>
            </div>
            <div role="form" class={styles.inputDiv}>
              <label
                class={`${styles.label} ${
                  errors.month ? "text-[hsl(0,100%,67%)]" : ""
                }`}
              >
                MONTH
              </label>
              <input
                type="text"
                placeholder="MM"
                class={`${styles.input} ${
                  errors.month ? "border-[hsl(0,100%,67%)]" : ""
                }`}
                onKeyUp$={(event) => {
                  date.mm = parseInt((event.target as HTMLInputElement).value);
                }}
              />
              <span class={`${styles.span} ${errors.month ? "" : "hidden"}`}>
                {errors.month}
              </span>
            </div>
            <div role="form" class={styles.inputDiv}>
              <label
                class={`${styles.label}  ${
                  errors.year ? "text-[hsl(0,100%,67%)]" : ""
                }`}
              >
                YEAR
              </label>
              <input
                type="text"
                placeholder="YYYY"
                class={`${styles.input} ${
                  errors.year ? "border-[hsl(0,100%,67%)]" : ""
                }`}
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

          <div
            role="group"
            class="sm:w-[500px] w-full sm:my-0 my-8 flex flex-row justify-center items-center"
          >
            <div
              role="none"
              class="border-b-2 grow border-[hsl(0,0%,86%)]"
            ></div>
            <div role="none" class="p-4 bg-[hsl(259,100%,65%)] rounded-full">
              <Arrow class="w-[36px] h-[34px]" />
            </div>
            <div
              role="none"
              class="border-b-2 sm:hidden grow border-[hsl(0,0%,86%)]"
            ></div>
          </div>

          <div role="group" class="flex flex-col">
            <p class={styles.resultParagraph}>
              <span class={styles.resultSpan}>
                {date.result.years ? date.result.years : "- -"}
              </span>{" "}
              years
            </p>

            <p class={styles.resultParagraph}>
              <span class={styles.resultSpan}>
                {date.result.months ? date.result.months : "- -"}
              </span>{" "}
              months
            </p>

            <p class={styles.resultParagraph}>
              <span class={styles.resultSpan}>
                {date.result.days ? date.result.days : "- -"}
              </span>{" "}
              days
            </p>
          </div>
        </section>
      </main>
    </>
  );
});
