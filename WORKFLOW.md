# Box Office Sync - Workflow Report
**Name:** Arriola, Wengie  
**Repository:** git-boxoffice-sync-arriola-wengie

---

## Task Screenshots

### Task 1: Push a Change from Clone A
![Task 1 Success](screenshots/task1.png)

### Task 2: Diverge from Clone B (Rejected Push)
![Task 2 Rejected](screenshots/task2.png)

### Task 3: Reconcile with a Merge
![Task 3 Merge](screenshots/task3.png)

### Task 4: Bring in the Third Contributor (Clone C - Rejected Push)
![Task 4 Rejected](screenshots/task4.png)

### Task 5: Reconcile a Three-Way Merge
![Task 5 Three-Way Merge](screenshots/task5.png)

### Task 6: Reconcile with a Rebase
![Task 6 Rebase](screenshots/task6.png)

### Task 7: Merge into Main and Tag
![Task 7 Tagged](screenshots/task7.png)

## Discussion Questions

### 1. Walk through the final `calculateTicketPrice` function and name which contributor's change is responsible for each part.
* **Base calculation:** Multiplies base price by quantity (Initial codebase).
* **Rounding logic:** Uses `Math.floor()` or rounding function (Clone B's change).
* **Group discount:** Applies a 10% discount for orders of 5+ tickets (Clone A's change).
* **VIP Surcharge:** Adds a 50% surcharge for premium seating (Clone C's change).
* **Flat discount:** Subtracts a flat $10 off the total order (Clone A's rebase change).

### 2. Compare Task 3's two-way conflict to Task 5's three-way conflict — what got harder with a third line of work?
A two-way conflict only requires reconciling two conflicting sets of changes (yours versus the remote repository). A three-way conflict introduces an additional independent branch of work. This increases mental overhead, creates more complex conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`), and raises the risk of accidentally overwriting or missing another contributor's code logic.

### 3. Task 6's flat $10 discount changed the expected result of tests unrelated to your change (the group-discount and VIP tests). Why, and what does that tell you about "isolated" changes in shared code?
Modifying a central financial calculation function alters the order of operations—such as applying a flat subtraction before or after percentage-based multiplications. This demonstrates that in shared codebases, functions are rarely truly "isolated" if they mutate the same underlying data flow; a global change downstream can inadvertently shift baseline math for earlier test cases.

### 4. If this were a real team of three, what one process change would have prevented all three rejected pushes?
Implementing a **Pull Request / Code Review workflow combined with continuous communication** would have prevented these rejections. If developers fetched and pulled changes from the shared main/feature branch *before* starting their local modifications, or worked on independent modules instead of the exact same pricing file simultaneously, conflicts and rejected pushes would be avoided.