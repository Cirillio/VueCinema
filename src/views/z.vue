<template>
  <div
    class="flex flex-col gap-2 items-center m-auto scale-90 sm:scale-150 lg:scale-200"
  >
    <span class="font-extrabold text-2xl text-center"
      >Voice of GOYDA: {{ question }}</span
    >
    <span class="badge badge-error rounded-full badge-outline mx-auto">{{
      timer
    }}</span>
    <input
      v-model="answer"
      type="text"
      class="input w-fit"
      placeholder="say my goyda"
    />
    <button @click="quize" class="btn btn-secondary w-fit">to goyda</button>
    <span class="text-xl font-bold">Result:</span>
    <span
      v-if="completed"
      :class="{
        'badge badge-xl badge-success': result.status,
        'badge badge-sm badge-error': !result.status,
      }"
      >{{ result.text }}</span
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import z from "z";

const questions = [
  "Доводилось ли вам бывать на сво? гойда",
  "Вас держат на сво? гойда",
  "Что вы чувствуете когда находитесь в окопе? гойда",
  "Вас учили штурмовать? сво",
  "Украина нелегитимное государство? база",
  "Вы жаждите подписать контракт? сво",
  "Вам снится орешник? гойда",
  "Крым - наш. база",
  "Что вы чувствуете держа в руках дрон? гойда",
  "Повторите три раза: сво,гойда,орешник",
  "сво,гойда,орешник",
  "сво,гойда,орешник",
];
const question = ref(null);
const result = ref({ text: "" });
const answer = ref(null);
const timer = ref(0);
const completed = ref(false);

const quize = async () => {
  completed.value = false;
  answer.value = null;
  result.value = null;
  let answers = 0;

  const processQuestion = async (q) => {
    question.value = q;
    let count = 5;
    timer.value = count;

    return new Promise((resolve) => {
      const _timer = setInterval(() => {
        if (count === 0) {
          clearInterval(_timer);
          z.matches(answer.value)(
            (x = "сво") => answers++,
            (x = "гойда") => answers++,
            (x = "база") => answers++,
            (x = "сво,гойда,орешник") => answers++
          );
          resolve();
        } else {
          count--;
          timer.value = count;
        }
      }, 1000);
    });
  };

  for (const q of questions) {
    await processQuestion(q);
  }

  result.value =
    answers === questions.length
      ? {
          text: "ГИГАСЛОН",
          status: true,
        }
      : {
          text: "Не слон(",
          status: false,
        };

  completed.value = true;
  question.value = null;
};
</script>
