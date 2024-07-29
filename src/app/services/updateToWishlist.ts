
export async function updateToWishlist({userId, productId,statusUpdate}:{userId: string, productId: string, statusUpdate:boolean}): Promise<{ message: string }> {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    try {
        const response = await fetch(`${apiUrl}/api/wishlist`, {
            method: 'POST',
            body: JSON.stringify({ productId, userId, action: statusUpdate? 'add':'remove'}),
        });
        if (!response.ok) {
            throw new Error('Failed to update product to wishlist');
        }

        return { message: 'Product update to wishlist successfully' };
    } catch (error) {
        console.error("Erro ao atualizar a tarefa:", error);
        throw error;
    }
}
