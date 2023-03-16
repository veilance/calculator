const calc = (nums: any, ops: any) => {
  const b = nums.pop();
  const a = nums.pop();
  const op = ops.pop();
  if (op == "+") {
    nums.push(a + b);
  } else if (op == "-") {
    nums.push(a - b);
  } else if (op == "*") {
    nums.push(a * b);
  } else {
    nums.push(a / b);
  }
};

const precedes = (prevOp: string, currOp: string) => {
  if (prevOp == "(") return false;
  return prevOp == "*" || prevOp == "/" || currOp == "+" || currOp == "-";
};

export const handleCalculation = (input: string): string => {
  const nums = [];
  const operations = [];
  let hasPrevNum = false;

  for (let i = 0; i < input.length; ++i) {
    const c = input.charAt(i);
    if (/[0-9]/.test(c)) {
      let num = Number(c);
      while (i + 1 < input.length && /[0-9]/.test(input.charAt(i + 1))) {
        num = num * 10 + Number(input.charAt(i++ + 1));
      }
      nums.push(num);
      hasPrevNum = true;
    } else if (c == "(") {
      operations.push("(");
      hasPrevNum = false;
    } else if (c == ")") {
      while (operations[operations.length - 1] != "(") {
        calc(nums, operations);
      };
      operations.pop();
    } else if (c == "+" || c == "-" || c == "*" || c == "/") {
      if (!hasPrevNum) {
        nums.push(0);
      }
      while (operations.length > 0 && precedes(operations[operations.length - 1], c)) {
        calc(nums, operations);
      }
      operations.push(c);
    }
  }

  while (operations.length > 0) {
    calc(nums, operations);
  }

  return String(nums[nums.length - 1]);
};
