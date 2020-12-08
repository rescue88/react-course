import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus.jsx';

describe("ProfileStatus Component", () => {
    test("get a status property thr props", () => {
        const component = create(<ProfileStatus status="HEYOO" />);
        const instance = component.getInstance();

        expect(instance.props.status).toBe("HEYOO");
    });

    test("searching for a starting span(should be changed for a button after doubleClick)", () => {
        const component = create(<ProfileStatus />);
        const componentRoot = component.root;
        const span = componentRoot.findByType("span");

        expect(span).not.toBeNull();
    });

    test("inner status should be displayed in span", () => {
        const status = "my status";
        const component = create(<ProfileStatus status={ status } />);
        const componentRoot = component.root;
        const span = componentRoot.findByType("span");

        expect(span.children[0]).toBe(status);
    });

    test("input shouldnt be displayed", () => {
        const component = create(<ProfileStatus />);
        const componentRoot = component.root;

        expect(() => {
            componentRoot.findByType("input");
        }).toThrow();
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus />);
        const componentRoot = component.root;
        const span = componentRoot.findByType("span");
        
        span.props.onDoubleClick();
        const input = componentRoot.findByType("input");

        expect(input).not.toBeNull();
    });

    test("input's value should equal to inner status", () => {
        const status = "my status";
        const component = create(<ProfileStatus status={ status } />);
        const componentRoot = component.root;
        const span = componentRoot.findByType("span");
        
        span.props.onDoubleClick();
        const input = componentRoot.findByType("input");

        expect(input.props.value).toBe(status);
    });

    test("callback should be called once", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={ "heyooo" } updateStatus={ mockCallback } />);
        const instance = component.getInstance();

        instance.deactivateEditMode();

        expect(mockCallback.mock.calls.length).toBe(1); 
    });
});