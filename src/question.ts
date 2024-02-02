type Role = "user" | "admin";
type Sex = "male" | "female";
type OutputData = string | number;

interface User {
  id: number;
  name: string;
  role: Role;
  sex: Sex;
}

export const users: User[] = [
  {
    id: 0,
    name: "Ilya",
    role: "admin",
    sex: "male"
  },
  {
    id: 1,
    name: "Anya",
    role: "admin",
    sex: "female"
  },
  {
    id: 2,
    name: "Oleg",
    role: "user",
    sex: "male"
  },
  {
    id: 3,
    name: "Katya",
    role: "user",
    sex: "female"
  }
];

type TGroupedUsers = Record<string, User[]>;

// Реализовать функцию группировки пользователей по полу
export const groupUsersBySex = (items: User[]): TGroupedUsers => {
  const result: TGroupedUsers = { female: [], male: [] };
  items.forEach((user) =>
    user.sex == "female" ? result.female.push(user) : result.male.push(user)
  );

  return result;
};

// Реализовать функцию группировки пользователей по любому признаку
export const groupUsers = (items: User[], groupedFn: (item: User) => string): TGroupedUsers => {
  const result: TGroupedUsers = {};

  items.forEach((user) => {
    const group = groupedFn(user);
    // if (typeof result[group] !== "undefined" && result[group].length > 0) {
    //   result[group].push(user);
    // } else {
    //   result[group] = [user];
    // }
    result[group] = [...(result[group] ?? []), user];
  });

  return result;
};

// const partialUser: Partial<User> = {};

// Реализовать функцию группировки массива любых объектов (одного типа) по любому признаку (полю)
export const groupFn = <T, TKey extends OutputData>(
  items: Array<T>,
  groupedFn: (item: T) => TKey
): Partial<Record<TKey, T[]>> => {
  const result: Partial<Record<TKey, T[]>> = {};

  items.forEach((user) => {
    const group = groupedFn(user);
    const groupItems = result[group];
    if (!!groupItems && groupItems.length > 0) {
      groupItems.push(user);
    } else {
      result[group] = [user];
    }
    // result[group] = [...(result[group] ?? []), user];
  });

  return result;
};

// --------------------------------------------------------------------------------------------------------------------

interface DocumentMeta {
  name: string;
  type: {
    format: "txt" | "pdf" | "docx";
    http?: string;
  };
}
const documents: DocumentMeta[] = [
  {
    name: "Заметки",
    type: {
      format: "txt"
    }
  },
  {
    name: "Курсовая",
    type: {
      format: "pdf"
    }
  },
  {
    name: "Отзыв руководителя",
    type: {
      format: "pdf"
    }
  }
];
export const groupDocuments = () => {
  return groupFn(documents, (document) => document.type.format);
};

// ---------------------------------- type guard ------------------------------------------

export const ifEmpty = <T>(data: T | undefined | null): data is T => {
  return typeof data !== "undefined" && data !== null;
};

export const checkString = (arg?: string | undefined): string => {
  if (!!arg) {
    return arg;
  }
  // return arg;
  return "Пустая строка";
};
export const checkStringTypeGuard = (arg?: string | undefined): string => {
  if (ifEmpty(arg)) {
    return arg;
  }
  return "Пустая строка";
};
