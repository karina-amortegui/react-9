import ProblemCard from "../extras/ProblemCard";

export const EmptyState = () => {
  const items = ["Apple", "Banana"];
  const searchTerm = "zzz";

  const results = items.filter((item) => item.includes(searchTerm));

  return (
    <ProblemCard
      title="Filter 09 — Empty state handling"
      method="filter"
      question='Filter by searchTerm. If no results, show "No results found".'
      dataPreview={{ items, searchTerm }}
    >
      {results.length === 0
        ? "No results found"
        : results.map((result) => <p>{results}</p>)}
    </ProblemCard>
  );
};
