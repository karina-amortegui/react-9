import ProblemCard from "../extras/ProblemCard";

export const CaseInsensitive = () => {
  const names = ["Ava", "liam", "Noah", "MIA", "Zoe"];

  const letters = names.filter((name) => name.includes("a"));

  return (
    <ProblemCard
      title="Filter 05 — Case-insensitive filtering"
      method="filter"
      question='Render only names that include the letter "a" (case-insensitive).'
      dataPreview={names}
    >
      <ul>
        {letters.map((letter) => (
          <li>{letter}</li>
        ))}
      </ul>
    </ProblemCard>
  );
};
