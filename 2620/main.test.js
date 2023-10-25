import main from "./main";

test("example 1", () => {
    //arrange
    const input = 10;
    
    //act
    const counter = main(input);

    //assert
    expect(counter()).toBe(10);
    expect(counter()).toBe(11);
    expect(counter()).toBe(12);    
})

test("example 2", () => {
    //arrange
    const input = -2;
    
    //act
    const counter = main(input);

    //assert
    expect(counter()).toBe(-2); 
    expect(counter()).toBe(-1);
    expect(counter()).toBe(0);
    
})