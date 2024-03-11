import { render, fireEvent } from "@testing-library/react";
import App from "./App";

jest.setTimeout(5000)

describe(App, () => {
    it("should add the two non-empty inputs and get the correct value", async () => {
        const { getByTestId } = render(<App />);

        const firstInput = getByTestId("firstInput");
        const secondInput = getByTestId("secondInput");
        const addButton = getByTestId("add");

        fireEvent.change(firstInput, { target: { value: 10 } });
        fireEvent.change(secondInput, { target: { value: 7 } });
        fireEvent.click(addButton);

        const result = getByTestId("result");

        // Arbitrarily wait 2 seconds for fetch to finish
        await new Promise((r) => setTimeout(r, 2000));

        expect(result.textContent).toEqual("result: 17");
    });
});
