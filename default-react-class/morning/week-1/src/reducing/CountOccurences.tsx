import ProblemCard from "../extras/ProblemCard";

export const CountOccurences = () => {
  const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

  const occurrences = words.reduce(
    (occurrences: Record<string, number>, word) => {
      if (!occurrences[word]) {
        occurrences[word] = 1;
      } else {
        occurrences[word] += 1;
      }

      return occurrences;
    },
    {},
  );

  return (
    <ProblemCard
      title="Reduce 07 — Count occurrences"
      method="reduce"
      question="Use reduce() to count how many times each word appears."
      dataPreview={words}
    >
      {Object.entries(occurrences).map(([word, count]) => (
        <ul>
          <li>
            {word}: {count}
          </li>
        </ul>
      ))}
    </ProblemCard>
  );
};
