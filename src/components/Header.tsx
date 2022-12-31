import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderProps } from "@src/types/props"; 
import { useTableCreator } from "../utils/mutations/tableCreate";
import { useTableDelete } from "../utils/mutations/tableDelete";

const Header = ({
  pageTitle,
  rightBtnText,
  rightBtnLink,
  leftBtnText,
  leftBtnLink,
  mutationTables,
  fetchedTables,
}: HeaderProps) => {
  const { tableCreate } = useTableCreator();
  const { deleteTable } = useTableDelete();
  const router = useRouter();

  const handleClick = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (rightBtnText !== "Save" || !mutationTables)
      return router.push(rightBtnLink);

    if (!fetchedTables) {
      // simply mutations
      if (mutationTables.length === 0) return router.push(rightBtnLink);
      for (let i = 0; i < mutationTables.length; i++) {
        // i はfor 句で宣言されている
        const TableCreateArgs = mutationTables[i];
        // 処理を一つずつ実行する
        await tableCreate({
          variables: { table: TableCreateArgs },
        });
      }
      return router.push(rightBtnLink);
    }

    if (fetchedTables) {
      // fetchedData exists but not mutationTable
      const deleteTarget = fetchedTables.filter(
        (item) =>
          !mutationTables.map((y) => y.tableName).includes(item.tableName)
      );

      const createMutation = mutationTables.filter(
        (item) =>
          !fetchedTables.map((y) => y.tableName).includes(item.tableName)
      );

      // createMutations
      if (createMutation.length === 0 && deleteTarget.length === 0)
        return router.push(rightBtnLink);
      for (let i = 0; i < createMutation.length; i++) {
        // i はfor 句で宣言されている
        const TableCreateArgs = createMutation[i];
        // 処理を一つずつ実行する
        await tableCreate({
          variables: { table: TableCreateArgs },
        });
      }

      if (deleteTarget.length === 0) return router.push(rightBtnLink);
      // deleteMutations
      for (let i = 0; i < deleteTarget.length; i++) {
        // i はfor 句で宣言されている
        const TableDeleteId = deleteTarget[i].id as string;
        // 処理を一つずつ実行する
        await deleteTable({
          variables: { tableDeleteId: TableDeleteId },
        });
      }
      return router.push(rightBtnLink);
    }
  };

  return (
    <header className="border border-stone-300 bg-sky-200 p-4">
      <div className="flex justify-center">
        {leftBtnText && leftBtnLink && (
          <div className="mr-auto ml-0">
            <Link href={leftBtnLink}>
              <a className="text-black">{leftBtnText}</a>
            </Link>
          </div>
        )}
        <p
          className="text-black"
          style={{
            marginLeft: "auto",
            marginRight: leftBtnText ? "auto" : "none",
          }}
        >
          {pageTitle}
        </p>
        <div className="mr-0 ml-auto">
          <Link href={rightBtnLink}>
            <a className="text-black" onClick={handleClick}>
              {rightBtnText}{" "}
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
