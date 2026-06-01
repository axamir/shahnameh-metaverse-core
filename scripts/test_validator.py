import subprocess
import time
import httpx

def main():
    print("🔧 Starting Loyalty Validator server...")
    proc = subprocess.Popen(
        ["uvicorn", "validator.main:app", "--host", "127.0.0.1", "--port", "8001", "--log-level", "error"],
        stdout=subprocess.PIPE, stderr=subprocess.PIPE
    )
    time.sleep(3)

    try:
        # Health check
        resp = httpx.get("http://127.0.0.1:8001/health")
        print("Health check:", resp.json())

        # Validation test
        test_request = {
            "member_address": "0x1234...",
            "tribe_symbol": "@F@",
            "tribe_seal": "I am here not because I must, but because I understood.",
            "public_actions": [
                "Helped a new member understand the protocol",
                "Supported a community proposal for transparency",
                "Contributed code to the repository",
                "Publicly defended the tribe's values"
            ]
        }
        resp = httpx.post("http://127.0.0.1:8001/validate", json=test_request)
        if resp.status_code == 200:
            data = resp.json()
            print(f"✅ Validation test passed. Final score: {data['final_score']}")
            for i, sc in enumerate(data['individual_scores']):
                print(f"   Model {i+1} score: {sc['score']}")
        else:
            print("❌ Validation request failed:", resp.text)
    finally:
        proc.terminate()
        proc.wait()

if __name__ == "__main__":
    main()
