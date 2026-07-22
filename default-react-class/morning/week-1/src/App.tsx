import "./App.css";

// Mapping
import { CapitalizeWords } from "./mapping/CapitalizeWords";
import { ConditionalRender } from "./mapping/ConditionalRender";
import { DoubleNumbers } from "./mapping/DoubleNumbers";
import { FormatPrices } from "./mapping/FormatPrices";
import { FruitList } from "./mapping/FruitList";
import { FullNames } from "./mapping/FullNames";
import { RankedList } from "./mapping/RankedList";
import { RenderFromData } from "./mapping/RenderFromData";
import { RenderNumbers } from "./mapping/RenderNumbers";
import { RenderObjects } from "./mapping/RenderObjects";

// Filtering
import { AdminsOnly } from "./filtering/AdminsOnly";
import { CaseInsensitive } from "./filtering/CaseInsensitive";
import { EmptyState } from "./filtering/EmptyState";

// Reduce
import { CartTotal } from "./reducing/CartTotal";
import { CountItems } from "./reducing/CountItems";
import { CountOccurences } from "./reducing/CountOccurences";

// import { EvensOnly } from "./filtering/EvensOnly"
// import { LongWordsOnly } from "./filtering/LongWordsOnly"
// import { MultipleConditions } from "./filtering/MultipleConditions";
import { SumNumbers } from "./reducing/SumNumbers";
import { GroupUsers } from "./reducing/GroupUsers";

function App() {
  return (
    <>
      <CapitalizeWords />
      <ConditionalRender />
      <DoubleNumbers />
      <FormatPrices />
      <FruitList />
      <FullNames />
      <RankedList />
      <RenderFromData />
      <RenderNumbers />
      <RenderObjects />

      <AdminsOnly />
      <CaseInsensitive />
      <EmptyState />

      <CartTotal />
      <CountItems />
      <CountOccurences />

      <SumNumbers />
      <GroupUsers />
    </>
  );
}

export default App;
