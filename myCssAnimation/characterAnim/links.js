import { name, AsyncTypewriter } from "./characterAnim.mjs";

linkIds = [
    "angler_fish",
    "pacific_saury",
    "skipjack_tuna",
    "fat_greenling"
]

const RunAsyncTypewriter =  async () => {
    await AsyncTypewriter("angler_fish", 200, "#621414");
    await AsyncTypewriter("pacific_saury", 200, "#621414");
    await AsyncTypewriter("skipjack_tuna", 200, "#621414");
}

RunAsyncTypewriter();
console.log(name);