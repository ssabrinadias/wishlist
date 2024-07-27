
export async function addToWishlist(productId:string): Promise<{ message: string }> {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    try {
        const response = await fetch(`${apiUrl}/api/wishlist`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({id:1}),
        });
        
        if (!response.ok) {
        throw new Error('Failed to add product to wishlist');
        }

        return { message: 'Product added to wishlist successfully' };
    } catch (error) {
        console.error("Erro ao atualizar a tarefa:", error);
        throw error;
    }
}
