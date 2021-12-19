import D "mo:base/Debug";

actor {
    // stable var is retained across upgrades (i.e. deployments)
    stable var state: Nat = 0;
    public func greet(name : Text) : async Text {
        return "Hello, " # name # "!";
    };
    public func add(num1 : Nat, num2: Nat): async Nat {
        let result = num1 + num2;
        D.print(debug_show("this is the result", result));
        return result;
    };

    public func readState(): async Nat {
        return state;
    };
};
