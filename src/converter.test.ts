import { convertToRoman } from "./converter";

describe("Roman Numeral Converter", () => {
  //1
  it("should throw an error when input is less than 1", () => {
    expect(() => convertToRoman(0)).toThrow("Out of range");
  });
  //2
  it("should throw an error when input is more than 3999", () => {
    expect(() => convertToRoman(4000)).toThrow("Out of range");
  });
  //3
  it("should convert 1 to I", () => {
    expect(convertToRoman(1)).toBe("I");
  });
  //4
  it("should convert 3 to III", () => {
    expect(convertToRoman(3)).toBe("III");
  });
  //5
  it("should convert 4 to IV", () => {
    expect(convertToRoman(4)).toBe("IV");
  });
  //6
  it("should convert 5 to V", () => {
    expect(convertToRoman(5)).toBe("V");
  });
  //7
  it("should convert 7 to VII", () => {
    expect(convertToRoman(7)).toBe("VII");
  });
  //8
  it("should convert 10 to X", () => {
    expect(convertToRoman(10)).toBe("X");
  });
  //9
  it("should convert 11 to XI", () => {
    expect(convertToRoman(11)).toBe("XI");
  });
  //10
  it("should convert 16 to XVI", () => {
    expect(convertToRoman(16)).toBe("XVI");
  });
  //11
  it("should convert 22 to XXII", () => {
    expect(convertToRoman(22)).toBe("XXII");
  });
  //12
  it("should convert 28 to XXVIII", () => {
    expect(convertToRoman(28)).toBe("XXVIII");
  });
  //13
  it("should convert 40 to XL", () => {
    expect(convertToRoman(40)).toBe("XL");
  });
  //14
  it("should convert 49 to XLIX", () => {
    expect(convertToRoman(49)).toBe("XLIX");
  });
  //15
  it("should convert 50 to L", () => {
    expect(convertToRoman(50)).toBe("L");
  });
  //16
  it("should convert 72 to LXXII", () => {
    expect(convertToRoman(72)).toBe("LXXII");
  });
  //17
  it("should convert 72 to LXXII", () => {
    expect(convertToRoman(72)).toBe("LXXII");
  });
  //18
  it("should convert 100 to C", () => {
    expect(convertToRoman(100)).toBe("C");
  });
  //19
  it("should convert 111 to CXI", () => {
    expect(convertToRoman(111)).toBe("CXI");
  });
  //20
  it("should convert 399 to CCCXCIX", () => {
    expect(convertToRoman(399)).toBe("CCCXCIX");
  });
  //21
  it("should convert 400 to CD", () => {
    expect(convertToRoman(400)).toBe("CD");
  });
  //22
  it("should convert 543 to DXLIII", () => {
    expect(convertToRoman(543)).toBe("DXLIII");
  });
  //23
  it("should convert 1234 to MCCXXXIV", () => {
    expect(convertToRoman(1234)).toBe("MCCXXXIV");
  });
  //24
  it("should convert 2000 to MM", () => {
    expect(convertToRoman(2000)).toBe("MM");
  });
  //25
  it("should convert 3999 to MMMCMXCIX", () => {
    expect(convertToRoman(3999)).toBe("MMMCMXCIX");
  });
});
