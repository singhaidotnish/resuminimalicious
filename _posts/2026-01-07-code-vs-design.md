# THE SPAGHETTI WAY (Dangerous)
# logic is mixed with execution
def buy_stock(symbol, amount):
    # What if amount is > account_balance?
    # What if we already bought this 100 times this second?
    api.execute_order(symbol, amount, "BUY") 
    print(f"Bought {amount} of {symbol}")

# ----------------------------------------

# THE ARCHITECTED WAY (Safe)
# Logic is separated from execution via Design Patterns

class RiskManager:
    _instance = None  # Singleton Pattern
    
    def check_risk(self, amount, balance):
        if amount > balance:
            raise Exception("Risk Alert: Insufficient Funds")
        if self.daily_trade_count > 50:
            raise Exception("Risk Alert: Overtrading Detected")
        return True

class TradingBot:
    def __init__(self, budget):
        self.risk_manager = RiskManager() # Dependency
        self.balance = budget

    def execute_trade(self, symbol, amount):
        # The Code doesn't just "run", it asks for permission first
        try:
            if self.risk_manager.check_risk(amount, self.balance):
                api.execute_order(symbol, amount, "BUY")
                self.balance -= amount
        except Exception as e:
            print(f"Trade Blocked: {e}")

# The "Code" is longer, but the "System" is safer.
