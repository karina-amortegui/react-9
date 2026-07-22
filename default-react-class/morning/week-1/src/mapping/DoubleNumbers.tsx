import ProblemCard from "../extras/ProblemCard";

/**
 * Render out al ist of each number doubled
 */

export const DoubleNumbers = () => {
  const nums = [5, 10, 15];
  const doubled = nums.map((number) => number * 2);

  return (
    <ProblemCard
      title="Map 05 — Add computed data"
      method="map"
      question="Render each number doubled."
      dataPreview={nums}
    >
      <ul>
        {doubled.map((number) => (
          <li>{number}</li>
        ))}
      </ul>
    </ProblemCard>
  );
};
