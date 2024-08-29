class Solution {
  
    insertionSort(pairs) {
        const n = pairs.length;
        const res = []; 

        for (let i = 0; i < n; i++) {
            let j = i - 1;

           
            while (j >= 0 && pairs[j].key > pairs[j + 1].key) {
                [pairs[j], pairs[j + 1]] = [pairs[j + 1], pairs[j]];
                j -= 1;
            }

           
            res.push([...pairs]);
        }

        return res;
    }
}

